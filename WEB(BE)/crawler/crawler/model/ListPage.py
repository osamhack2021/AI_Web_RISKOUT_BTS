import json
import os

from crawler.error import HTMLElementsNotFoundError as notfound_error

"""
특정 목록 페이지를 읽기 위한 방법(태그, 클래스 등)을 명시하는 클래스임
걍 설명서임
"""
class ListPage:
    def __init__(self, site_name):
        with open(self.get_list_json(site_name), 'r') as f:
            config = json.load(f)
        
        self.name = config['name']

        self.list_div = config['list']['div']
        try:
            self.list_div_class = config['list']['div_class']
        except KeyError:
            self.list_div_class = None

        self.paging_div = config['paging']['div']
        self.paging_div_class = config['paging']['div_class']
        self.paging_tag = config['paging']['tag']

    def get_list_json(self, site_name):
        path= os.path.dirname(os.path.realpath(__file__))
        return path + site_name + "/list.json"

    def get_each_urlbases(self):
        pass

    def get_nowpage(self, soup):
        """
        페이지를 찾으면 현재 페이지 번호를,
        찾지 못하면 에러 발생
        """
        page_div = soup.find(self.paging_div, class_ = self.paging_div_class)
        
        if(page_div is None):
            raise notfound_error("ListPage.py/get_nowpage", "paging div")
        
        nowpage = int(page_div.find(self.paging_tag).get_text())
        if(nowpage is None):
            raise notfound_error("ListPage.py/get_nowpage", "paging tag")

        return nowpage

    def get_contents_urls(self, soup):
        pass



