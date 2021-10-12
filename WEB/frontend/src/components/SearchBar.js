import { useState, useEffect } from 'react';
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import { autoCompleteFilterState } from '../atoms/searchState';
import {
  appliedFilterMapState,
  appliedAutoCompleteFilterState,
} from '../atoms/appliedFilterMapState';
import useSearchEffect from '../hooks/useSearchEffect';

import { Autocomplete, Box, Button, Chip, TextField } from '@mui/material';

export default function SearchBar() {
  useSearchEffect();

  const setAppliedFilterMap = useSetRecoilState(appliedFilterMapState);
  const autoCompleteFilter = useRecoilValue(autoCompleteFilterState);
  const appliedAutoCompleteFilter = useRecoilValue(
    appliedAutoCompleteFilterState
  );

  const onTagsChange = (event, values) => {
    let format = {};
    for (let { word, label } of values) {
      if (!format[label]) format[label] = [word];
      else format[label].push(word);
    }
    setAppliedFilterMap(format);
  };

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
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              color={option.label === 'PER' ? 'primary' : 'secondary'}
              variant="outlined"
              label={`${option.word}`}
              {...getTagProps({ index })}
            />
          ))
        }
      />
    </Box>
  );
}
