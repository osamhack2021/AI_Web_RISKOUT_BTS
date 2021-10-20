import pprint

from riskout.textrank import KeysentenceSummarizer
from riskout.textrank import KeywordSummarizer
from konlpy.tag import Okt, Komoran, Mecab, Hannanum, Kkma

# 9.11. 네이버뉴스 국방/외교 제목
sents = [
    "北도 주목한 드라마 D.P. 지옥같은 南 군살이 파헤쳐···부패상 그대로 폭로",
    "북한 김여정, 금수산 참배식 참석, 건재함 과시",
    "코로나 집단감염 청해부대 탔던 문무대왕함 국내 복귀 마쳐",
    "박재민 차관, UAE· 베트남 순방길...방산수출 확대, 국방협력 격상 토대마련할듯",
    "국방장관님 요즘도 D.P.보다 심하지 말입니다 20대 예비역 트라우마 꺼냈다",
    "북한 선전매체 드라마 DP 남조선 군부 부패상 폭로",
    "軍 코로나19 신규확진 3명…누적 1656명",
    "코로나 집단 감염 문무대왕함, 국내 복귀",
    "코로나19 집단발병 청해부대 탔던 문무대왕함 국내 복귀(상보)",
    "코로나 집단감염 사태 문무대왕함, 진해 해군기지 복귀",
    "메타버스에 반한 육군...훈련체계 40년만에 싹 바꾼다",
    "양낙규의 Defence Club DP병, 탈영병 얼마나 체포했나",
    "박재민 국방차관, 17일까지 UAE·베트남 공식 방문",
    "박재민 국방차관, UAE·베트남 공식 방문…아크부대 격려",
    "北의 침묵 속…한미일 북핵수석 3개월만에 다시 모인다",
    "역린 건드렸다 文이 대놓고 격노한 산업부 차관의 말",
    "11일부터 출생연도 상관없이 국민지원금 온라인 신청 가능",
    "한미일북핵대표 오는 14일 도쿄 회동…北 대화 유인책 나올까",
    "中 견제 느슨한 고리 강화하는 미국…커지는 韓 고민",
    "백신접종 도우미 국민비서 국민지원금 알림도 척척",
    "[오늘의 주요일정] 정치·정부(11일, 토)",
    "美국무부 성 김, 일본行…북핵수석 3자 회담 참석",
    "성 김, 13~15일 방일…도쿄서 한미일 북핵수석대표 협의",
    "SLBM 발사관 10개 갖춘 잠수함 만든다",
    "이번엔 공군 女중령이 男군무원 성희롱 논란",
    "고노 담화 무력화시킨 日에… 외교부 매우 유감"
]


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


# 모델 부르는데 병목 있으니 만들어놓고 global로 사용
tokenizer = get_tokenizer("mecab")
tokenize = lambda x: tokenizer.nouns(x)


keyword_extractor = KeywordSummarizer(
    tokenize=tokenize,
    window=-1,
    verbose=False
)

summarizer = KeysentenceSummarizer(
    tokenize=tokenize,
    min_sim=0.3,
    verbose=False
)

keywords = keyword_extractor.summarize(sents, topk=30)
keysents = summarizer.summarize(sents, topk=3)

pprint.pprint(keywords)
# print(type(keywords))

pprint.pprint(keysents)
# print(type(keysents))


"""Mecab
[('핵', 1.6977389593581211),
 ('북', 1.6977389593581211),
 ('일', 1.5428423577253496),
 ('코로나', 1.4018435666934437),
 ('미일', 1.313037011113924),
 ('집단', 1.236590400260078),
 ('문무', 1.236590400260078),
 ('대왕', 1.236590400260078),
 ('복귀', 1.236590400260078),
 ('北', 1.2163172345653943),
 ('차관', 1.1936359822139475),
 ('국방', 1.1936359822139475),
 ('부대', 1.1471998009638997),
 ('박재민', 1.0822405050931065),
 ('베트남', 1.0822405050931065),
 ('국내', 1.027398233527385),
 ('성', 0.9482833084524593),
 ('김', 0.9482833084524593),
 ('감염', 0.9363601140102115),
 ('도쿄', 0.9285287520057464),
 ('수석', 0.8979336067953742),
 ('공식', 0.8905780967558083),
 ('방문', 0.8905780967558083),
 ('드라마', 0.8178618068380156),
 ('부패상', 0.8178618068380156),
 ('폭로', 0.8178618068380156),
 ('국민', 0.804665623652395),
 ('청해', 0.776430300457438),
 ('참석', 0.6351885099231911),
 ('북한', 0.5875868968203355)]
[(12, 1.2408452915935402, '박재민 국방차관, 17일까지 UAE·베트남 공식 방문'),
 (17, 1.2371907286937773, '한미일북핵대표 오는 14일 도쿄 회동…北 대화 유인책 나올까'),
 (22, 1.220695663680734, '성 김, 13~15일 방일…도쿄서 한미일 북핵수석대표 협의')]
"""