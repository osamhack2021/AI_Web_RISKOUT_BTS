import { atom, selector, useRecoilValue } from 'recoil';

/* @search response */
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

export const contentState = selector({
  key: 'contentState',
  get: ({ get }) => get(searchState).contents,
});

export function useContents() {
  return useRecoilValue(contentState);
}

export function useTotalContentsLength() {
  return useRecoilValue(searchState).totalContentsLength;
}

export function usePageContentsLength() {
  return useRecoilValue(searchState).pageContentsLength;
}

export function useFilterTags() {
  return useRecoilValue(filterTagsState);
}
