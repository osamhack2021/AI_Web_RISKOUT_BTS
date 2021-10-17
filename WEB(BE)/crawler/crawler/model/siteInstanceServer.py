from crawler.model.naver.NaverNewsSite import NaverNewsSite
from crawler.model.dcinside.DCSite import DCSite

ret = { 'naver_news': NaverNewsSite(), 'dcinside': DCSite() }

import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
Twitter_Secret_Path = os.path.join(BASE_DIR, 'twitter', 'secrets.py')

if os.path.isfile(Twitter_Secret_Path):
    from crawler.model.twitter.Twitter import Twitter
    ret['twitter'] = Twitter()


def get_siteInstance_list():
    return ret
    
