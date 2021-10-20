from urllib.parse import urlparse

from crawler.error import HTMLElementsNotFoundError as notfound_error
from crawler.error import daterangeError as date_error

from crawler.model.Site import *
from crawler.model.dcinside.const import *

from crawler.model.const import *

class DCListPage(listpage):
    def __init__(self):
        listpage.__init__(self, '/dcinside')

    # override
    def get_each_urlbases(self):
        # + "&page="
        urlinfo = URLInfo(DOMAIN, NAVY)
        return [DC_BASE + "&page="], urlinfo

    #override
    def get_contents_urls(self, soup):
        """
        컨텐츠 페이지의 url들을 리스트에 담아 리턴하는 함수,
        실패할 경우 에러를 발생시킨다
        """
        ret = []
        
        list_div = soup.find(self.list_div, class_=self.list_div_class)

        if(list_div is None):
            raise notfound_error("DCSite.py/get_contents_urls", "list div")

        for li in list_div.find_all("div", class_="gall-detail-lnktb"):
            href = li.find('a', class_='lt')['href']
            ret.append(href)

        if not ret:
            raise notfound_error("DCSite.py/get_contents_urls", "contents on list div")

        return ret

class DCContentsPage(contentspage):
    def __init__(self):
        contentspage.__init__(self, '/dcinside')

    def get_finedate(self, date):
        data = date[-15:-6].replace('.','_')
        return data

    def get_fineauthor(self, author):
        return author[0:-16]

class DCSite(Site):
    def __init__(self):
        self.name = 'dcinside'
        self.category = 'community'
        self.listpage = DCListPage()
        self.contentspage = DCContentsPage()
        self.header = DC_CUSTOM_HEADER

        self.hasAPI = False

    def get_articleID(self, contents_url):
        parts = urlparse(contents_url)
        article_id = parts.path.split('/')[3]
        return article_id

    def contentCheck(self, content):
        created_at = content.created_at
        created_at = '20' + created_at
        created_at = created_at.split("_")
        created_at = datetime(year = int(created_at[0]), month = int(created_at[1]), day = int(created_at[2]))
        if (datetime.today() - timedelta(hours = CRAWL_DATEAMOUNT * 24)) > created_at:
            raise date_error
