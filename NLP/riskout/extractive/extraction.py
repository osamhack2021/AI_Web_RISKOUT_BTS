import re
from gensim.summarization import summarize
from riskout.utils import preprocess


class ExtractiveSummarizer(object):
    """Extractive summarize using gensim library."""
    def __init__(self, ratio_or_count='ratio', ratio=0.4, word_count=50):
        self.ratio = ratio
        self.word_count = word_count
        self.ratio_or_count = ratio_or_count
        assert self.ratio_or_count == 'ratio' or self.ratio_or_count == 'count'

    def summarize(self, text):
        text = self._preprocess(text)
        if len(text.split('.')) < 10:
            return text
        else:            
            text = self._summarize(text)
            return re.sub('\n', ' ', text)

    def _summarize(self, text):
        try:
            if self.ratio_or_count == 'ratio':
                res = summarize(text, ratio=self.ratio)
            elif self.ratio_or_count == 'count':
                res = summarize(text, word_count=self.word_count)
        except:
            res = '.'.join(text.split('.')[:10])
        return res

    def _preprocess(self, text):
        return preprocess(text)