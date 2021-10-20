import os
import unicodedata
import sqlite3
import requests
import json
from time import time
from datetime import datetime, timedelta
from pymongo import MongoClient
from pymongo.collection import ReturnDocument
from pymongo.cursor import CursorType


# SERVER_URL = 'http://localhost:8000/'
SERVER_URL = 'http://host.docker.internal:8000/'

current_abs_path= os.path.dirname(os.path.abspath(__file__))
db_path = os.path.join(os.path.dirname(current_abs_path), "crawler", "crawler", "database.db")
conn = sqlite3.connect(db_path)
cur = conn.cursor()


class Content:
    """
    * Cloned from crawler.model -> Content.py

    기존 RAW 데이터에 Analyzed된 데이터까지 포함함
    """
    def __init__(self, extracted):
        self.content_dict = extracted
        """
        id: (mongoDB에 insert 되기 직전에 생성됨)

        site_url, thumbnail_url, category, title, contentBody, author, created_at: extracted 에서 추출

        summarized, positivity, entities: analyze 호출 이후 할당
        """
        
        self.getSummarized()
        self.getPositivity()
        self.getEntities()
        self.getTrueScore()
        self.content_dict['isAnalyzed'] = True
    

    def getSummarized(self):
        if self.content_dict['category'] == 'news':
            url = SERVER_URL + 'summarize/extractive'
            document = {"document": self.content_dict['contentBody']}
            document = json.dumps(document)

            try:
                summarized = requests.post(url, data=document, timeout=20)

                if summarized.status_code == 200:
                    try:
                        self.content_dict['summarized'] = json.loads(summarized.text)['summarized'][0]
                    except Exception as e:
                        print(f"Error occured while summarizing data : {e}")
                        self.content_dict['summarized'] = None

                else:
                    print(f"Error occured while fetching summarized data : {summarized.status_code}")
                    self.content_dict['summarized'] = None

            except Exception as e:
                print(f"Error occured while fetching summarized data : {e}")
                self.content_dict['summarized'] = None

        else:
            self.content_dict['summarized'] = None


    def getPositivity(self):
        url = SERVER_URL + 'sentiment'
        document = {"document": self.content_dict['contentBody']}
        document = json.dumps(document)
        try:
            positivity = requests.post(url, data=document, timeout=20)

            if positivity.status_code == 200:
                try:
                    self.content_dict['positivity'] = json.loads(positivity.text)['score'][0]
                except Exception as e:
                    print(f"Error occured while getting positivity : {e}")
                    self.content_dict['positivity'] = None
            else:
                print(f"Error occured while fetching positivity data : {positivity.status_code}")
                self.content_dict['positivity'] = None

        except Exception as e:
            print(f"Error occured while fetching positivity data : {e}")
            self.content_dict['positivity'] = None



    def getEntities(self):
        url = SERVER_URL + 'ner'
        document = {"document": self.content_dict['contentBody']}
        document = json.dumps(document)
        try:
            entities = requests.post(url, data=document, timeout=20)

            if entities.status_code == 200:
                try:
                    self.content_dict['entities'] = json.loads(entities.text)['ner'][0]
                except Exception as e:
                    print(f"Error occured while getting entities : {e}")
                    self.content_dict['entities'] = None
            else:
                print(f"Error occured while fetching entities : {entities.status_code}")
                self.content_dict['entities'] = None

        except Exception as e:
            print(f"Error occured while fetching entities : {e}")
            self.content_dict['entities'] = None
    

    def getTrueScore(self):
        if self.content_dict['category'] == 'news':
            url = SERVER_URL + 'fakenews'
            document = {"document": self.content_dict['contentBody']}
            document = json.dumps(document)

            try:
                true_score = requests.post(url, data=document, timeout=20)

                if true_score.status_code == 200:
                    try:
                        self.content_dict['true_score'] = json.loads(true_score.text)['true_score']
                    except Exception as e:
                        print(f"Error occured while true_score data : {e}")
                        self.content_dict['true_score'] = None

                else:
                    print(f"Error occured while fetching true_score data : {true_score.status_code}")
                    self.content_dict['true_score'] = None

            except Exception as e:
                print(f"Error occured while fetching true_score data : {e}")
                self.content_dict['true_score'] = None

        else:
            self.content_dict['true_score'] = None


class DBHandler:
    def __init__(self):
        # host = "localhost"
        host = "host.docker.internal"
        port = "8001"
        self.client = MongoClient(host, int(port))

    def insert_item_one(self, data, db_name=None, collection_name=None):
        result = self.client[db_name][collection_name].insert_one(data).inserted_id
        return result

    def insert_item_many(self, datas, db_name=None, collection_name=None):
        result = self.client[db_name][collection_name].insert_many(datas).inserted_ids
        return result

    def find_item_one(self, condition=None, db_name=None, collection_name=None):
        result = self.client[db_name][collection_name].find_one(condition)
        return result

    def find_item(self, condition=None, db_name=None, collection_name=None):
        result = self.client[db_name][collection_name].find(condition, no_cursor_timeout=True, cursor_type=CursorType.EXHAUST)
        return result

    def delete_item_one(self, condition=None, db_name=None, collection_name=None):
        result = self.client[db_name][collection_name].delete_one(condition)
        return result

    def delete_item_many(self, condition=None, db_name=None, collection_name=None):
        result = self.client[db_name][collection_name].delete_many(condition)
        return result

    def update_item_one(self, condition=None, update_value=None, db_name=None, collection_name=None):
        result = self.client[db_name][collection_name].update_one(filter=condition, update=update_value)
        return result

    def update_item_many(self, condition=None, update_value=None, db_name=None, collection_name=None):
        result = self.client[db_name][collection_name].update_many(filter=condition, update=update_value)
        return result

    def text_search(self, text=None, db_name=None, collection_name=None):
        result = self.client[db_name][collection_name].find({"$text": {"$search": text}})
        return result

    def get_next_sequence(self, counter_name=None, db_name=None, collection_name=None):
        result = self.client[db_name][collection_name].find_one_and_update({'_id': counter_name}, {'$inc': {'seq': 1}}, return_document=ReturnDocument.AFTER)
        result = int(result['seq'])
        return result


def dataRanker(data):
    print('[*] Data ranker Started!')

    if not len(data):
        return data

    url = SERVER_URL + 'keysentences'
    document = {"document": []}
    ranked_data = []
    sentences = []

    for tup in data:
        document["document"].append(tup[0])
    
    document = json.dumps(document)

    try:
        ranked = requests.post(url, data=document, timeout=20)

        if ranked.status_code == 200:
            try:
                for sentence in json.loads(ranked.text)['keysentences']:
                    sentences.append(sentence["sentence"])

            except Exception as e:
                print(f"Error occured while ranking data : {e}")
                quit()
        else:
            print(f"Error occured while fetching ranking data : http status code : {ranked.status_code}")
            quit()

    except Exception as e:
        print(f"Error occured while fetching ranking data : {e}")
        quit()


    for sentence in sentences:
        for tup in data:
            if tup[0] == sentence:
                ranked_data.append(tup)

    return ranked_data


def extractor(data):
    print('[*] Extractor Started!\n')

    if len(data) < 1:
        print("[!] All pages have been analyzed.")
        cur.close()
        conn.close()
        quit()

    for idx, tup in enumerate(data):
        extracted = {}
        extracted['title'] = tup[0]
        extracted['site_url'] = tup[1]
        extracted['thumbnail_url'] = tup[2]
        extracted['contentBody'] = unicodedata.normalize('NFKC', tup[3]) # 공백 문자가 \xa0 로 인식되는 문제 해결
        extracted['category'] = tup[4]
        extracted['created_at'] = datetime.strptime(tup[9].strip(), "%y_%m_%d")
        extracted['author'] = tup[10]

        content = Content(extracted)
        cur.execute("UPDATE CrawlContents SET isAnalyzed = 1 WHERE id = ?", (tup[7], ))
        conn.commit()

        if dbInserter(content.content_dict):
            print(f"[+] Extractor: {idx + 1}/{len(data)}")

    return None


def dbInserter(content):
    mongo = DBHandler()
    hasNone = False

    for key in content:
        if key in ['title', 'site_url', 'thumbnail_url', 'summarized', 'true_score']:
            if content['category'] == 'news' and content[key] == None:
                hasNone = True
                break

        else:
            if content[key] is None:
                hasNone = True
                break

    if not hasNone:
        content['_id'] = mongo.get_next_sequence('analyzed_counter', 'riskout', 'counter')

        try:
            mongo.insert_item_one(content, "riskout", "analyzed")
            mongo.client.close()
            return True
        
        except Exception as e:
            print("DB insert error occured :", e)
            mongo.client.close()
            return False
    
    else:
        print("DB insert error occured : null found!")
        mongo.client.close()
        return False
        
        
def main():
    start_time = time()

    cur.execute("SELECT * FROM CrawlContents WHERE isAnalyzed = 0")
    raw_data = cur.fetchall()

    date_list = []
    important_data_list = []
    
    for tup in raw_data:
        if tup[9] not in date_list:
            date_list.append(tup[9])

    for date in date_list:
        cur.execute("SELECT * FROM CrawlContents WHERE isAnalyzed = 0 AND category = 'news' AND created_at = ?", (date,))
        ranked_list = dataRanker(cur.fetchall())
        
        if ranked_list:
            important_data_list.extend(ranked_list)
            cur.execute("UPDATE CrawlContents SET isAnalyzed = 1 WHERE isAnalyzed = 0 AND category = 'news' AND created_at = ?", (date,))
            conn.commit()
    
    cur.execute("SELECT * FROM CrawlContents WHERE isAnalyzed = 0") # news는 이미 analyzed 되었기 때문에 sns와 community만 남는다
    important_data_list.extend(cur.fetchall())


    print(f"[*] Serving {len(important_data_list)} pages to Extractor...")

    extractor(important_data_list)

    cur.close()
    conn.close()

    end_time = time()
    elasped_time = round((end_time - start_time), 3)
    print(f"\n\nelasped_time : {elasped_time}\n\n")


if __name__ == '__main__':
    main()
