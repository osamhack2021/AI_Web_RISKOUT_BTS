import { useEffect } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';
import { searchState } from '../atoms/searchState';
import { searchSettingState } from '../atoms/searchSettingState';
import { searchDetected } from '../lib/api/searchDetected';

export default function useSearchInitEffect() {
  const [search, setSearch] = useRecoilState(searchState);
  const searchSetting = useRecoilValue(searchSettingState);
  /* TODO searchSetting 을 이용해서 params 넘겨주는 코드 작성 */
  useEffect(() => {
    if (Object.keys(search.contents).length !== 0) return;

    //TODO: API 서버 배포시 수정
    async function fetchData() {
      const data = await searchDetected({
        mode: 'all',
        category: 'all',
        period: 24,
        tags: searchSetting.tags,
        search_text: [],
        offset: 0,
        limit: 100,
      });

      setSearch(data);
    }

    fetchData();
  }, []);
}
