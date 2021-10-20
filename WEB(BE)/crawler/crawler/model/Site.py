from crawler.model.ListPage import ListPage as listpage
from crawler.model.ContentsPage import ContentsPage as contentspage
from crawler.model import const as const
from crawler.model.URLInfo import URLInfo

from crawler.setting import DEBUG

from datetime import datetime, timedelta

class Site:
    def __init__(self, listjson, contentjson):
        self.listpage = listpage(listjson)
        self.contentspage = contentspage(contentjson)

    def contentCheck(self, content):
        pass
