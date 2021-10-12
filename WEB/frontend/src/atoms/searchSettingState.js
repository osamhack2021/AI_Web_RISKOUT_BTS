import { atom, selector } from 'recoil';
import { appliedFilterMapState } from './appliedFilterMapState';

// 검색 request에 해당하는 atom

/* Example
{
    "category": "news",
    "period": 72,
    "tags": { "PER": ["김정은"], "LOC": ["북한"] },
    "search_text": "노동신문",
    "limit": 5,
    "offset": 0
}
*/

const initialState = {
  category: '',
  period: 24,
  tags: {},
  searchText: '',
  limit: 5,
  offset: 0,
};

// 검색할 때 넘기는 DateRange와 Filter 를 정의하는 atom
export const searchSettingState = selector({
  key: 'searchSettingState',
  get: ({ get }) => {
    const filter = get(appliedFilterMapState);
    return { ...initialState, tags: filter };
  },
});
