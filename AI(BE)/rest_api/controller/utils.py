from riskout.utils import get_tokenizer


tokenizer = get_tokenizer("mecab")
nouns = tokenizer.nouns
morphs = tokenizer.morphs