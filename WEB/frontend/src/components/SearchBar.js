import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { autoCompleteFilterState } from '../atoms/searchState';
import { appliedFilterListState } from '../atoms/appliedFilterMapState';
import useSearchEffect from '../hooks/useSearchEffect';

import { Autocomplete, Box, TextField } from '@mui/material';

export default function SearchBar() {
  useSearchEffect();

  const autoCompleteFilter = useRecoilValue(autoCompleteFilterState);
  const appliedFilterList = useRecoilValue(appliedFilterListState);
  const onTagsChange = (event, values) => {
    console.log(values);
  };

  return (
    <Box>
      <Autocomplete
        multiple
        value={appliedFilterList}
        options={autoCompleteFilter}
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
