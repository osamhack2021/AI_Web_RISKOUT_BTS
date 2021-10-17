import re
from konlpy.tag import Okt, Komoran, Mecab, Hannanum, Kkma


REMOVE_CHARS = re.compile(r"©|'+|(=+.{2,30}=+)|__TOC__|(ファイル:).+|:(en|de|it|fr|es|kr|zh|no|fi):|\n", re.UNICODE)
SPACE_CHARS = re.compile(r"(\\s|゙|゚|　)+", re.UNICODE)
EMAIL_PATTERN = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", re.UNICODE)
URL_PATTERN = re.compile(r"(ftp|http|https)?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+", re.UNICODE)
REMOVE_TOKEN_CHARS = re.compile(r"(\\*$|:$|^파일:.+|^;)", re.UNICODE)
MULTIPLE_SPACES = re.compile(r' +', re.UNICODE)

def preprocess(content: str ) -> str:
    content = content.replace('.', '. ')   # for line split function
    content = re.sub(EMAIL_PATTERN, ' ', content)  # remove email pattern
    content = re.sub(URL_PATTERN, ' ', content) # remove url pattern
    content = re.sub(REMOVE_CHARS, ' ', content)  # remove unnecessary chars
    content = re.sub(SPACE_CHARS, ' ', content)
    content = re.sub(MULTIPLE_SPACES, ' ', content)

    return content

def get_tokenizer(tokenizer_name):
    if tokenizer_name == "komoran":
        tokenizer = Komoran()
    elif tokenizer_name == "okt":
        tokenizer = Okt()
    elif tokenizer_name == "mecab":
        tokenizer = Mecab()
    elif tokenizer_name == "hannanum":
        tokenizer = Hannanum()
    elif tokenizer_name == "kkma":
        tokenizer = Kkma()
    else:
        tokenizer = Mecab()
    return tokenizer

def tokenize(tokenizer, sent):
    words = tokenizer.nouns(sent)
    words = [w for w in words]
    return words



