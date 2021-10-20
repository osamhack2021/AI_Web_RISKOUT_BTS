#네이버 뉴스 하드코딩
POLITICS = 100
NORTH_KOREA = 268

DOMAIN = 'naver'
NK = 'north_korea'

NAVER_BASE = f"https://news.naver.com/main/list.naver?mode=LS2D&mid=shm&sid2={NORTH_KOREA}&sid1={POLITICS}"

NAVER_CUSTOM_HEADER = {
    'referer' : "https://www.naver.com/",
    'user-agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36'
}
