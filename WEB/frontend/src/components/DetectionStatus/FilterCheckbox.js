import { Grid, Stack } from '@mui/material';

import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { filterListState } from '../../atoms/filterListState';

export default function FilterCheckbox(props) {
  const { count, hashtag, checked } = props;
  const [filterList, setFilterList] = useRecoilState(filterListState);

  const onChange = useCallback((e) => {
    if (filterList.includes(hashtag)) {
      setFilterList(filterList.filter((val) => val !== hashtag));
    } else {
      setFilterList([...filterList, hashtag]);
    }
  });

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" justifyContent="space-between" spacing={0.5}>
        <input type="checkbox" onChange={onChange} checked={checked} />
        <p>{hashtag}</p>
      </Stack>
      <em>{count > 10 ? '10+' : count}</em>
    </Stack>
  );
}
