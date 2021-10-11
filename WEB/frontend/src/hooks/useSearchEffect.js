import { useEffect } from 'react';
import axios from 'axios';

import { useRecoilState, useRecoilValue } from 'recoil';
import { searchState } from '../atoms/searchState';
import { appliedFilterMapState } from '../atoms/appliedFilterMapState';

export default function useSearchEffect() {
  const [search, setSearch] = useRecoilState(searchState);
  const appliedFilterMap = useRecoilValue(appliedFilterMapState);
  /* TODO searchSetting 을 이용해서 params 넘겨주는 코드 작성 */
  useEffect(() => {
    //TODO: API 서버 배포시 수정
    const searchUrl = `/static/SecretData.example.json`;
    async function fetchSearch() {
      axios.get(searchUrl).then((data) => {
        setSearch(data.data);
      });
    }

    fetchSearch();
  }, [appliedFilterMap]);
}
