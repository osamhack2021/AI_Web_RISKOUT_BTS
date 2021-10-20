import json
import os

# 특정 뉴스 페이지를 읽기 위한 방법(태그, 클래스 등)을 명시하는 클래스임
# 따라서 가급적 메소드 추가하지 않는 방향으로 갈 것
class ContentsPage:
    def __init__(self, site_name):
        with open(self.get_contents_json(site_name), 'r') as f:
            config = json.load(f)
        
        self.name = config['name']

        # title
        # div와 div_class를 통해 해당 데이터 주변에 접근
        # tag를 통해 정확한 데이터 확보
        self.title_div = config['title']['div']
        self.title_div_class = config['title']['div_class']
        self.title_tag = config['title']['tag']
        try:
            self.title_tag_class = config['title']['tag_class']
        except KeyError:
            self.title_tag_class = None

        # body
        self.body_div = config['body']['div']
        self.body_div_class = config['body']['div_class']
        try:
            self.body_tag = config['body']['tag']
        except KeyError:
            self.body_tag = None
        try:
            self.body_tag_class = config['body']['tag_class']
        except KeyError:
            self.body_tag_class = None

        # img
        try:
            self.img_div = config['img']['div']
        except KeyError:
            self.img_div = None
        try:
            self.img_div_class = config['img']['div_class']
        except KeyError:
            self.img_div_class = None

        # created_at
        try:
            self.create_div = config['created_at']['div']
        except KeyError:
            self.create_div = None
        try:
            self.create_div_class = config['created_at']['div_class']
        except KeyError:
            self.create_div_class = None

        # author
        try:
            self.author_div = config['author']['div']
        except KeyError:
            self.author_div = None
        try:
            self.author_div_class = config['author']['div_class']
        except KeyError:
            self.author_div_class = None


    def get_contents_json(self, site_name):
        path= os.path.dirname(os.path.realpath(__file__))
        return path + site_name + "/contents.json"

