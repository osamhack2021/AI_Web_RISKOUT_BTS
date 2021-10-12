import tweepy

from crawler.model.twitter.const import *
from crawler.model.twitter.secrets import *
from crawler.setting import DEBUG

from datetime import datetime, timedelta

from crawler.model import const as const

import time

class TwitterContent():
    def __init__(self, body, category, site_domain, subject, contents_id, created_at, author):
        self.url = None
        self.title = None
        self.body = body
        self.img_url = None
        self.category = category
        self.site_domain = site_domain
        self.subject = subject
        self.contents_id = contents_id
        self.created_at = created_at
        self.author = author

class Twitter():
    def __init__(self):
        auth = tweepy.OAuthHandler(TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET)
        auth.set_access_token(TWITTER_ACCESS_KEY, TWITTER_ACCESS_SECRET)

        self.api = tweepy.API(auth)

        self.category = 'sns'

        self.hasAPI = True

    def crawl(self, db):

        for keyword in KEYWORD:
            tweets = tweepy.Cursor(self.api.search_tweets, q = keyword + ' -filter:retweets', result_type = 'recent').items(150 // len(KEYWORD))

            if(DEBUG):
                print(keyword)

            for tweet in tweets:
                content = twitter_contents_factory(self, tweet, keyword)

                created_at = content.created_at
                created_at = '20' + created_at
                created_at = created_at.split("_")
                created_at = datetime(year = int(created_at[0]), month = int(created_at[1]), day = int(created_at[2]))
                if (datetime.today() - timedelta(hours = const.CRAWL_DATEAMOUNT * 24)) > created_at:
                    if(DEBUG):
                        print("date limit exceeded")
                    break

                if content.contents_id not in db.select_id():
                    db.put_content(content)
            
            time.sleep(const.CRAWLING_LIST_INTERVAL)

    def define_created_at(self, created_at):
        created_at = str(created_at)[2:10]
        created_at = created_at.replace("-", "_")
        return created_at

def twitter_contents_factory(site, tweet, keyword):
    body = tweet.text
    category = site.category
    site_domain = DOMAIN
    subject = keyword
    contents_id = tweet.id_str
    created_at = site.define_created_at(tweet.created_at)
    author = tweet.user.name

    twitter_content = TwitterContent(body, category, site_domain, subject, contents_id, created_at, author)

    return twitter_content
