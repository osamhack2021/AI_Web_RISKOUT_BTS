import { useCallback } from 'react';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import produce from 'immer';

// 검색에 사용되는 적용된 필터
const initialState = {
  PER: [],
  FLD: [],
  AFW: [],
  ORG: [],
  LOC: [],
  CVL: [],
  DAT: [],
  TIM: [],
  NUM: [],
  EVN: [],
  ANM: [],
  PLT: [],
  MAT: [],
  TRM: [],
};
// ['GP/GOP', '정체단', '사이버작전센터'];

export const appliedFilterMapState = atom({
  key: 'appliedFilterMapState',
  default: initialState,
});

export const appliedFilterListState = selector({
  key: 'appliedFilterListState',
  get: ({ get }) => {
    const values = Object.values(get(appliedFilterMapState));
    return Array.prototype.concat(...values);
  },
});

export const appliedAutoCompleteFilterState = selector({
  key: 'appliedAutoCompleteFilterState',
  get: ({ get }) => {
    const appliedFilterMap = get(appliedFilterMapState);
    let autocompleteList = [];
    for (let [key, values] of Object.entries(appliedFilterMap)) {
      for (let value of values) {
        autocompleteList.push({ word: value, labe: key });
      }
    }
    return autocompleteList;
  },
});

export function useAppliedFilterMapActions() {
  const value = useRecoilValue(appliedFilterMapState);
  const set = useSetRecoilState(appliedFilterMapState);
  const reset = useResetRecoilState(appliedFilterMapState);

  const append = useCallback(
    (label, word) => {
      console.log('APPEND');
      set((prev) => ({
        ...prev,
        [label]: [...prev[label], word],
      }));
    },
    [set]
  );

  const remove = useCallback(
    (label, word) => {
      console.log('REMOVE');
      set((prev) => ({
        ...prev,
        [label]: prev[label].filter((w) => w !== word),
      }));
    },
    [set]
  );

  const includes = useCallback((label, word) => {
    if (value.hasOwnProperty(label) && value[label].includes(word)) return true;
    else return false;
  });

  return { set, reset, append, remove, includes };
}
