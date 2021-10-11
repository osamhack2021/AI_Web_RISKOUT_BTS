import React, { useEffect, useState, useRef } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { useRecoilState } from 'recoil';
import { appliedFilterMapState } from '../atoms/appliedFilterMapState';
import { useFilterTags } from '../atoms/searchState';

export default function AutocompleteInSearch() {
  const [inputValue, setInputValue] = useState('');
  const [appliedFilterMap, setAppliedFilterMap] = useRecoilState(
    appliedFilterMapState
  );

  const addItem = () => {
    setAppliedFilterMap((oldfilterMap) => [...oldfilterMap, inputValue]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>search</button>
    </div>
  );
}
