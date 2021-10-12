import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { autoCompleteFilterState } from '../atoms/searchState';
import {
  appliedFilterListState,
  appliedAutoCompleteFilterState,
  useAppliedFilterMapActions,
} from '../atoms/appliedFilterMapState';
import useSearchEffect from '../hooks/useSearchEffect';

import { Autocomplete, Box, TextField } from '@mui/material';

export default function SearchBar() {
  useSearchEffect();

  const autoCompleteFilter = useRecoilValue(autoCompleteFilterState);
  const appliedAutoCompleteFilter = useRecoilValue(
    appliedAutoCompleteFilterState
  );
  const appliedFilterList = useRecoilValue(appliedFilterListState);
  const { append } = useAppliedFilterMapActions();

  const onTagsChange = (event, values) => {
    const lstElem = values[values.length - 1];
    // append(lstElem['label'], lstElem['word']);
  };

  // appliedFilterList 에 Array(0) 이랑 f 들어가는 에러
  useEffect(() => console.log('appliedFilterList', appliedFilterList));

  return (
    <Box>
      <Autocomplete
        multiple
        // value를 autocomplete에 맞는 양식으로 줘야함.
        value={appliedAutoCompleteFilter}
        options={autoCompleteFilter}
        // {word: '조정환', label: 'PER'}
        getOptionLabel={(option) => option.word}
        onChange={onTagsChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label=""
            placeholder="Search"
            margin="normal"
            fullWidth
          />
        )}
      />
    </Box>
  );
}
