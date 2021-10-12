import { Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  appliedFilterMapState,
  useAppliedFilterMapActions,
} from '../../atoms/appliedFilterMapState';

export default function FilterCheckbox(props) {
  const { label, count, hashtag, checked } = props;
  const { append, remove, includes } = useAppliedFilterMapActions();
  const appliedFilterMap = useRecoilValue(appliedFilterMapState);

  const onChange = useCallback((e) => {
    if (includes(label, hashtag)) remove(label, hashtag);
    else append(label, hashtag);
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
