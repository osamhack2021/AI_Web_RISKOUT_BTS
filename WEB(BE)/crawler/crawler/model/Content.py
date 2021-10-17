import re

from crawler.setting import DEBUG
from crawler.error import englishContentError

class Content:
    """
    페이지의 내용에 대한 모델
    url, 제목, 내용, 대표 이미지가 있다.
    Website 모델을 토대로 얻은 정보들을 담고 있다.
    """
    def __init__(self, url, title, body, img_url, category, site_domain, subject, contents_id, created_at, author):
        self.url = url
        self.title = title
        self.body = body
        self.img_url = img_url
        self.category = category
        self.site_domain = site_domain
        self.subject = subject
        self.contents_id = contents_id
        self.created_at = created_at
        self.author = author

    def __str__(self):
        result = ""
        result += f"URL: {self.url}\n"
        result += f"Title: {self.title}\n"
        result += f"Body: {self.body}\n"
        result += f"Img_url: {self.img_url}\n"
        result += f"created_at: {self.created_at}\n"
        result += f"author: {self.author}\n"
        return result

def contents_factory(site, contents_page_url, urlinfo, soup):
    """
    페이지 soup을 이용해 Content 객체를 리턴하는 함수
    news_url은 그저 Content를 생성하기 위해 전달받았다.

    url이 없는 경우는 일단 NULL을 리턴하도록 설계하였다.

    """
    contents_page = site.contentspage
    # title
    try:
        title_div = soup.find(contents_page.title_div, class_=contents_page.title_div_class)

        try:
            title = str.strip(title_div.find(contents_page.title_tag)[contents_page.title_tag_class].get_text())
        except KeyError:
            title = str.strip(title_div.find(contents_page.title_tag).get_text())
    except AttributeError:
        title = "제목이 없습니다."

    if re.search("[가-힣]", title) is None:
        raise englishContentError

    # body
    body = None
    body_div = None

    try:
        if site.category == "news":
            body = ""
            body_div = soup.find(contents_page.body_div, class_=contents_page.body_div_class).findAll(text = True, recursive = False)

            for txt in body_div:
                txt = str.strip(txt.get_text())
                txt = re.sub("\[.*\].*=|\(.*=.*\).*=", '', txt)
                txt = re.sub("\[.*\]|\(.*=.*\)", '', txt)
                if(txt):
                    body += txt + ' '
        else:
            body_div = soup.find(contents_page.body_div, class_=contents_page.body_div_class)
            body = str.strip(body_div.get_text())

    except AttributeError:
        body = "내용이 없습니다."
    
    # img
    try:
        img_div = soup.find(contents_page.img_div, class_=contents_page.img_div_class)
        img_url = img_div.find('img')['src']
    except AttributeError:
        img_url = None
    except KeyError:
        img_url = None
    except TypeError:
        img_url = None

    # category
    category = site.category

    # site_domain
    site_domain = urlinfo.domain

    # subject
    subject = urlinfo.subject

    # contents_id
    contents_id = site.get_articleID(contents_page_url)

    # created_at
    try:
        created_at = soup.find(contents_page.create_div, class_=contents_page.create_div_class).get_text()
        created_at = contents_page.get_finedate(created_at)
    except:
        created_at = None

    # author
    try:
        author = str.strip(soup.find(contents_page.author_div, class_ = contents_page.author_div_class).get_text())
        author = contents_page.get_fineauthor(author)
    except:
        author = None

    content = Content(contents_page_url, title, body, img_url, category, site_domain, subject, contents_id, created_at, author)

    if(DEBUG):
        print(content)

    site.contentCheck(content)
    
    return content
