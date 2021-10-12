import { useState } from 'react';
import { useForm, Controller, register } from 'react-hook-form';

import { Button, Select, MenuItem } from '@mui/material';
import SearchBar from './SearchBar';

import { useRecoilValue } from 'recoil';
import { searchSettingState } from '../atoms/searchSettingState';
import axios from 'axios';

export default function SearchForm() {
  const { handleSubmit, register, setValue, control } = useForm({});
  const searchSetting = useRecoilValue(searchSettingState);
  const onSubmit = ({ search, type }) => {
    console.log('[Fetching with Form]...');
    console.log('search', searchSetting);
    console.log('type', type);
    // const response = await axios.get(``).data;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-form">
      <Controller
        control={control}
        render={({ field }) => <SearchBar {...field} setValue={setValue} />}
        defaultValue={{}}
      />

      <select {...register('type')}>
        <option value="all">All</option>
        <option value="leaked">기밀유출</option>
        <option value="fakenews">가짜뉴스 의심</option>
      </select>

      <Button variant="contained" color="primary" type="submit">
        search
      </Button>
    </form>
  );
}
