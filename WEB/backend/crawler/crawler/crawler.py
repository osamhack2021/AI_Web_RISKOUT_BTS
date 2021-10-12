# for checking elapsed time
import time

# for multiprocess
import asyncio
import aiohttp

# for crawl
import requests
from bs4 import BeautifulSoup as bs

# import class
from crawler.model import Content
from crawler.model import const as const

# database
import crawler.db as database

# error
from crawler.error import HTMLElementsNotFoundError as notfound_error
from crawler.error import contentLengthError as length_error
from crawler.error import englishContentError as english_ban
from crawler.error import daterangeError as date_error

# import setting values
from crawler.setting import DEBUG

# for matching site name to site class instance
from crawler.model.siteInstanceServer import get_siteInstance_list

"""
'Naver'같은 이름으로 site_instance_selector이용
get_instance_list에서 받아온 'Naver': NaverClass 와 같은 딕셔너리를 통해
crawler.py에서 직접 클래스 인스턴스(NaverClass)를 크롤링한다.

각각 사이트별 클래스에는
목록 클래스 사이트
컨텐츠 클래스 사이트
전체 사이트
3가지가 있음

목록 사이트에 대한 접근은 url조작을 통해
컨텐츠 사이트에 대한 접근은
목록 사이트에서 태그/클래스를 통한 스크래핑을 통해 접근

컨텐츠 사이트에서 내용을 읽어내는 것 역시
태그/클래스 식별을 통한 스크래핑이다.

새로운 사이트를 만든다면
1.
model 내부에 Naver와 같은 모듈을 만들고
그 안에 목록 사이트, 컨텐츠 사이트에 대한 것을 ListPage.py, ContentsPage.py를 상속하여 구현

2.
모듈 내부에 해당 사이트 리스트와 컨텐츠를 읽어오기 위한 json파일 작성

3.
사이트 구조 및 url이 변경된다면 클래스를 수정
html 및 class 이름이 변경된다면 json을 수정
"""

def site_instance_selector(site):
    return get_siteInstance_list()[site]

async def crawl_manager(site):
    start_time = time.time()
    await asyncio.gather(crawl(site_instance_selector(site)))
    end_time = time.time()
    if DEBUG:
        print(f'time taken crawling "{site}": {end_time - start_time}')

def get_request(url, header):
    """
    url에서 response 받아 리턴하는 간단한 함수
    """
    response = requests.get(url, headers = header)

    return response

async def get_contents(site, contents_url, urlinfo, db):
    """
    news_url에서 contents 객체를 만들어 리턴하는 함수
    페이지 각각에서 스크래핑하는 기능을 담당하고 있다
    """

    if(DEBUG):
        print(f"Send request to {contents_url}")

    # aiohttp 이용
    try:
        async with aiohttp.ClientSession() as sess:
            async with sess.get(contents_url, headers = site.header) as res:
                text = await res.text()
                content_soup = bs(text, 'html.parser')
                try:
                    news_content = Content.contents_factory(site, contents_url, urlinfo, content_soup)
                except english_ban as detail:
                    if(DEBUG):
                        print("english contents")
                        print(detail)
                except length_error as detail:
                    if(DEBUG):
                        print("contents does not valid by following exception")
                        print(detail)
                else:
                    if news_content.contents_id not in db.select_id():
                        db.put_content(news_content)
    except date_error:
        raise date_error
    except Exception as detail:
        if(DEBUG):
            print("an exception occured when getting information of contentsPage")
            print(detail)
                
    if (DEBUG):
        print(f"Received request to {contents_url}")

async def crawl(site):
    db = database.DB()

    if site.hasAPI:
        site.crawl(db)
        db.close()
        return

    each_urlbases, urlinfo = site.listpage.get_each_urlbases()

    for urlbase in each_urlbases:
        prev_page = 0
        now_page = 1

        test_breaker = 0

        try:
            while prev_page != now_page:
                if(DEBUG):
                    print('\nlisturl: ' + urlbase + str(now_page) + '\n')

                try:
                    response = get_request(urlbase + str(now_page), site.header)
                except requests.exceptions.ConnectionError as detail:
                    if(DEBUG):
                        print("in crawler/crawler.py/crawl: failed connection by following exception")
                        print(detail)
                    break
                except requests.exceptions.Timeout as detail:
                    if(DEBUG):
                        print("in crawler/crawler.py/crawl: server timeout occured")
                        print(detail)
                    break
                except requests.exceptions.HTTPError as detail:
                    if(DEBUG):
                        print("in crawler/crawler.py/crawl: unsuccessful respond occured")
                        print(detail)
                    break
                except requests.exceptions.RequestException as detail:
                    if(DEBUG):
                        print("in crawler/crawler.py/crawl: any other exception occured on getting respond")
                        print(detail)
                    break

                list_html = response.text
                list_soup = bs(list_html, 'html.parser')

                try:
                    now_page = site.listpage.get_nowpage(list_soup)
                except notfound_error as detail:
                    if(DEBUG):
                        print("in crawler/crawler.py: now_page not found by following exception")
                        print(detail)
                    break

                if(now_page == prev_page):
                    break
                
                try:
                    contents_urls= site.listpage.get_contents_urls(list_soup)
                except notfound_error as detail:
                    if(DEBUG):
                        print("in crawler/crawler.py: can't found contents url by following exception")
                        print(detail)
                    break

                futures = [asyncio.ensure_future(get_contents(site, contents_url, urlinfo, db)) for contents_url in contents_urls]

                await asyncio.gather(*futures)

                if(DEBUG):
                    print("nowpage: " + str(now_page) + '\n')

                await asyncio.sleep(const.CRAWLING_LIST_INTERVAL)

                test_breaker += 1
                prev_page = now_page
                now_page += 1
        except date_error as detail:
            if(DEBUG):
                print("crawling over date by following exception")
                print(detail)
            break

    db.close()
