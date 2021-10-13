import { useEffect } from 'react';
import axios from 'axios';

import { useRecoilState } from 'recoil';
import { searchState } from '../atoms/searchState';

export default function useSearchInitEffect() {
  const [search, setSearch] = useRecoilState(searchState);
  /* TODO searchSetting 을 이용해서 params 넘겨주는 코드 작성 */
  useEffect(() => {
    if (Object.keys(search.contents).length !== 0) return;

    //TODO: API 서버 배포시 수정
    const searchUrl = `/static/SecretData.example.json`;
    async function fetchSearch() {
      axios.get(searchUrl).then((data) => {
        console.log('처음검색', data.data);
        setSearch(data.data);
      });
    }

    fetchSearch();
  }, []);
}
