from urllib.parse import urlparse

from crawler.model.Site import *
from crawler.model.naver.const import *

from crawler.error import HTMLElementsNotFoundError as notfound_error
from crawler.error import contentLengthError as length_error


class NaverNewsListPage(listpage):
    def __init__(self):
        listpage.__init__(self, '/naver')

    # override
    def get_each_urlbases(self):
        date = datetime.today()
        date_format = date.strftime("%Y%m%d")
        # 맨 뒤에 페이지 번호 숫자(1~9999등)을 붙여 페이지를 이동하기 위함.
        each_urlbases = [NAVER_BASE] * const.CRAWL_DATEAMOUNT

        for i in range(const.CRAWL_DATEAMOUNT):
            each_urlbases[i] += f"&date={date_format}&page="
            date -= timedelta(days=1)
            date_format = date.strftime("%Y%m%d")

        urlinfo = URLInfo(DOMAIN, NK)

        return each_urlbases, urlinfo

    def get_contents_urls(self, soup):
        """
        page 안에서 뉴스들의 url을 찾아 리스트 형태로 리턴하는 함수
        실패할 경우 에러 발생
        """
        ret = []
        div = soup.find(self.list_div, class_ = self.list_div_class)
        if(div is None):
            raise notfound_error("NaverNewsSite.py/get_contents_urls", "list_div")

        # 사진이 없으면 작동을 안해버림
        for dt in div.find_all("dt", class_="photo"):
            href = dt.find('a')['href']
            ret.append(href)

        if not ret:
            raise notfound_error("NaverNewsSite.py/get_contents_urls", "contents on list div")

        return ret

class NaverNewsContentsPage(contentspage):
    def __init__(self):
        contentspage.__init__(self, '/naver')

    def get_finedate(self, date):
        data = date[2:10].replace('.','_')
        return data

    def get_fineauthor(self, author):
        return author

class NaverNewsSite(Site):
    def __init__(self):
        self.name = 'naver_news'
        self.category = 'news'
        self.listpage = NaverNewsListPage()
        self.contentspage = NaverNewsContentsPage()
        self.header = NAVER_CUSTOM_HEADER

        self.hasAPI = False

    def get_articleID(self, contents_url):
        parts = urlparse(contents_url)
        article_id = parts.query.split('&')[5][4:]

        return article_id

    def contentCheck(self, content):
        if(len(content.body) < 800 or len(content.body) > 2000):
            raise length_error

        return
