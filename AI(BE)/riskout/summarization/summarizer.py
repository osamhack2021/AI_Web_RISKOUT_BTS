import torch
from kobart import get_kobart_tokenizer
from transformers.models.bart import BartForConditionalGeneration


class AbstractiveSummarizer:
    def __init__(self, model_path, tokenizer=get_kobart_tokenizer, max_length=1024, num_beams=10):
        self.model = BartForConditionalGeneration.from_pretrained(model_path)
        self.tokenizer = tokenizer()
        self.max_length = max_length
        self.num_beams = num_beams

    def _preprocess(self, text: str):
        sents = text.replace('\n', '')
        input_ids = self.tokenizer.encode(sents, max_length=1024, truncation=True)
        input_ids = torch.tensor(input_ids).unsqueeze(0)
        return input_ids

    def predict(self, text: str):
        input_ids = self._preprocess(text)
        output = self.model.generate(input_ids, eos_token_id=1,
                                    max_length=self.max_length, num_beams=self.num_beams)
        output = self.tokenizer.decode(output[0], skip_special_tokens=True)
        return output
