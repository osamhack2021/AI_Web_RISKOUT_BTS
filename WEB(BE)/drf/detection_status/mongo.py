from pymongo import MongoClient
from pymongo.collection import ReturnDocument
from pymongo.cursor import CursorType


class DBHandler:
    def __init__(self):
        host = "localhost"
        # host = "host.docker.internal"
        port = "8001"
        self.client = MongoClient(f"mongodb://{host}:{port}/?maxIdleTimeMS={1000000000 - 1}")

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
