import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
Twitter_Secret_Path = os.path.join(BASE_DIR, 'model', 'twitter', 'secrets.py')

site_list = { 'NaverNews': 'naver_news', 'DCinside': 'dcinside' }

if os.path.isfile(Twitter_Secret_Path):
    site_list['Twitter'] = 'twitter'

DEBUG = False
