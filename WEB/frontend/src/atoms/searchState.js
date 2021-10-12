import { atom, selector, useRecoilValue } from 'recoil';

/* @search response
{
  "totalContentsLength": 1,
  "pageContentsLength": 1,
  "contents": [
    {
      "_id": 1630,
      "title": "북한, '김정은 10년' 벌써 기념…공식집권 2012∼21년 명시",
        "site_url": "https://news.naver.com/main/read.naver?mode=LS2D&mid=shm&sid1=100&sid2=268&oid=001&aid=0012650388",
        "thumbnail_url": "https://imgnews.pstatic.net/image/001/2021/10/08/AKR20211008064600504_05_i_P4_20211010102601032.jpg?type=w647",
        "contentBody": " 북한이 김정은 국무위원장의 '사실상 집권' 10주년을 약 두 달 앞두고서 대외선전매체마다 특별 웹페이지까지 개설하며 일찌감치 분위기를 띄우고 있다. 8일 북한 대외선전매체 '우리민족끼리'와 '통일의 메아리', '조선의 오늘'은 각각 김정은 집권 10년을 기념하는 웹페이지를 신설하고, 홈페이지 첫 화면에 연결 배너를 띄웠다. 우리민족끼리는 '승리와 영광으로 빛나는 혁명 영도의 10년'이라는 문구 아래 '불멸의 영도', '빛나는 영상', '불멸의 대강'이라는 카테고리로 김 위원장의 업적과 행보를 소개했다. 조선의 오늘은 '승리와 기적의 10년' 특별 페이지에서 지난해 10월 10일 노동당 창건 75주년 경축 열병식 연설과 청년 중시 사상을 강조했다. 통일의 메아리가 '영광의 세월 2012∼2021'이라고 명시한 부분도 눈에 띈다. 그간 김정은 위원장의 집권 시작 시점을 어떻게 봐야 하는지를 두고 의견이 분분했기 때문이다. 김정은은 2011년 12월 말 부친 김정일 국방위원장이 사망하면서 최고사령관에 취임했다. 2012년 4월 당 제1비서와 당 중앙군사위원장, 당 정치국 상무위원에 올랐고, 곧이어 국방위원회 제1위원장으로 추대됐다. 이 때문에 2011년 말에 최고사령관에 취임하고 사실상 최고지도자 자리에 올랐지만, 공식 집권은 2012년부터로 본다. 사실상 집권 기준이라면 2개월 전, 공식 집권 시점 기준으로는 약 반년 전부터 10주년 분위기를 띄우기 시작한 셈이다. 북한은 최근 주민들이 보는 노동신문 등 대내 매체에서도 김정은 10년을 지속해서 강조하는 모습이다. 이날도 노동신문은 키르기스스탄 노동당 창건 76주년 경축 토론회가 열렸다며 해외 인사의 발언을 인용해 \"김정은 동지께서 지난 10년간 역사에 길이 빛날 거대한 업적을 이룩하셨다\"고 언급했다. 또 김 위원장을 우상화하는 별도 기사에서도 \"지난 10년 세월 우리 인민은 심장으로 보았다\"며 10년을 내세웠다. heeva@yna.co.kr ",
        "category": "news",
        "created_at": "21-10-08",
        "author": "김경윤 기자",
        "summarized": "북한이 김정은 국무위원장의 사실상 집권 10주년을 약 두 달 앞두고서 대외선전매체마다 특별 웹페이지까지 개설하며 일찌감치 분위기를 띄우고 있다. 8일 북한 대외선전매체 우리민족끼리 와 통일의 메아리 , 조선의 오늘 은 각각 김정은 집권 10년을 기념하는 웹페이지를 신설하고, 홈페이지 첫 화면에 연결 배너를 띄웠다.",
        "positivity": 0.8584014773368835,
        "entities": {
            "ORG": [
                "노동당",
                "북한",
                "군사",
                "국무"
            ]
        },
        "true_score": 0.7429909706115723,
        "isAnalyzed": true
      },
    }
  ],
  "filterTags": {
    "PER": {
        "김정은": 4,
        "김정일": 3,
        "김": 3,
        "브": 1,
        "바슈": 1,
        "스키": 1,
        "이인영": 1,
        "톨드": 1,
        "치코": 1
    },
    "FLD": null,
  }
}
*/

export const searchState = atom({
  key: 'searchState',
  default: {},
});

export const filterTagsState = selector({
  key: 'filterTagsState',
  get: ({ get }) => get(searchState).filterTags,
});

export const autoCompleteFilterState = selector({
  key: 'autoCompleteFilterState',
  get: ({ get }) => {
    const filterTags = get(searchState).filterTags;
    if (!filterTags) return [];
    let autoCompleteFilter = [];
    for (let [label, wordCount] of Object.entries(filterTags))
      for (let word of Object.keys(wordCount))
        autoCompleteFilter = [
          ...autoCompleteFilter,
          { word: word, label: label },
        ];
    return autoCompleteFilter;
  },
});

export function useTotalContentsLength() {
  return useRecoilValue(searchState).totalContentsLength;
}

export function usePageContentsLength() {
  return useRecoilValue(searchState).pageContentsLength;
}

export function useContents() {
  return useRecoilValue(searchState).contents;
}

export function useFilterTags() {
  return useRecoilValue(filterTagsState);
}
