from collections import defaultdict
import numpy as np
import torch
import torch.nn.functional as F
from riskout.tokenization_kobert import KoBertTokenizer
from transformers import DistilBertForTokenClassification
from typing import List, Union, Optional, Callable
from riskout.ner.utils import tokenize


class NER:
    """ Distilkobert NER """ 
    PAD_TOKEN_LABEL_ID = -100

    def __init__(self, model_path, tokenizer=None, split_by=None):
        self.model = DistilBertForTokenClassification.from_pretrained(model_path)
        self.tokenizer = tokenizer or KoBertTokenizer.from_pretrained('monologg/kobert')
        self.label_id = { 'AFW-B': 6, 'AFW-I': 7, 'ANM-B': 22, 'ANM-I': 23, 'CVL-B': 12,
                          'CVL-I': 13, 'DAT-B': 14,'DAT-I': 15, 'EVT-B': 20, 'EVT-I': 21,
                          'FLD-B': 4, 'FLD-I': 5, 'LOC-B': 10, 'LOC-I': 11, 'MAT-B': 26,
                          'MAT-I': 27, 'NUM-B': 18, 'NUM-I': 19, 'O': 1, 'ORG-B': 8,
                          'ORG-I': 9, 'PER-B': 2, 'PER-I': 3, 'PLT-B': 24, 'PLT-I': 25,
                          'TIM-B': 16, 'TIM-I': 17, 'TRM-B': 28, 'TRM-I': 29, 'UNK': 0}
        self.id_label = {v: k for k, v in self.label_id.items()}
        self.split_by =  split_by if split_by else lambda x: x.split()

    def predict(self, texts: Union[str, List[str]]):
        if isinstance(texts, str):
            texts = [texts]
            
        with torch.no_grad():
            encodings = tokenize(texts, self.tokenizer, split_by=self.split_by)
            input_ids = torch.tensor(encodings['input_ids'], dtype=torch.long)
            attention_mask = torch.tensor(encodings['attention_mask'], dtype=torch.long)        
            slot_label_mask = torch.tensor(encodings['slot_label_mask'], dtype=torch.long)
            output = self.model(input_ids = input_ids, attention_mask = attention_mask)
            logits = output[0]
            preds, all_slot_label_mask = np.argmax(logits.numpy(), axis=2), slot_label_mask.numpy()
            corpus = [self.split_by(line) for line in texts]
            preds_list = [[] for _ in range(preds.shape[0])]

            for i in range(preds.shape[0]):
                for j in range(preds.shape[1]):
                    if all_slot_label_mask[i, j] != self.PAD_TOKEN_LABEL_ID:
                        preds_list[i].append(self.id_label[preds[i][j]])

            res = defaultdict(list)
            for words, preds in zip(corpus, preds_list):
                for word, pred in zip(words, preds):
                    if pred != 'O':
                        pred, _ = pred.split('-')
                        res[pred].append(word)
        
        return res
