import torch
import torch.nn.functional as F
from riskout.tokenization_kobert import KoBertTokenizer
from transformers import AutoModelForSequenceClassification
from typing import List, Union, Optional, Callable


class SentimentClassifier:
    """ Distilkobert sentiment classifier """ 
    def __init__(self, model_path, tokenizer=None):
        self.model = AutoModelForSequenceClassification.from_pretrained(model_path)
        self.tokenizer = tokenizer or KoBertTokenizer.from_pretrained('monologg/kobert')

    def predict(self, texts: Union[str, List[str]]):
        if isinstance(texts, str):
            texts = [texts]
            
        with torch.no_grad():
            encodings = self.tokenizer(texts, truncation=True, padding=True)
            input_ids = torch.tensor(encodings['input_ids'])
            attention_mask = torch.tensor(encodings['attention_mask'])        
            output = self.model(input_ids, attention_mask=attention_mask)[0]
            softmax = F.softmax(output, dim=1).tolist()

        return softmax[0] if len(softmax) == 1 else softmax
