import { useEffect } from 'react';
import axios from 'axios';

import { useRecoilState, useRecoilValue } from 'recoil';
import { searchListState } from '../atoms/searchListState';
import { filterListState } from '../atoms/filterListState';
import { useHistory } from 'react-router'

export default function useSeacrh() {
  const [searchList, setSearchList] = useRecoilState(searchListState);
  const filterList = useRecoilValue(filterListState);
  const history = useHistory()
  let token = localStorage.getItem("token");
  const data = {
    "category": "news",
    "period": 72,
    "tags": {"PER": ["김정은"], "LOC": ["북한"] },
    "search_text": "노동신문",
    "limit": 7,
    "offset": 0
}

  /* TODO searchSetting 을 이용해서 params 넘겨주는 코드 작성 */
  useEffect(() => {
    //TODO: API 서버 배포시 수정
    if(token.length==0){
      alert("로그인이 필요한 화면 입니다.");
      history.push("/login");
    }else{
      fetch('/api/nlp/analyze/', {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
          },
          body: JSON.stringify(data)
        }).then(res => res.json())
        .then(json=>{
          console.log("=========[api/nlp/analyze/]========");
          console.log(json);
        });
        
  
    }

    const searchUrl = `/static/SecretData.example.json`;
    async function fetchSearch() {
      axios.get(searchUrl).then((data) => {
        setSearchList(data.data);
        console.log(data.data);
      });
    }

    fetchSearch();
  }, [filterList]);
}
