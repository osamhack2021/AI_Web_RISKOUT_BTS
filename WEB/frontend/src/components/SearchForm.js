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
  const onSubmit = async ({ category, type, period }) => {
    // TODO 검색 api와 연동
    console.log('[Fetching with Form]...');
    console.log('category', category);
    console.log('period', period);
    console.log('tags', searchSetting);
    console.log('type', type);

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/1`
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-form">
      <Controller
        control={control}
        render={({ field }) => <SearchBar {...field} setValue={setValue} />}
        defaultValue={{}}
      />

      <Select {...register('category')}>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="news">뉴스</MenuItem>
        <MenuItem value="sns">SNS</MenuItem>
      </Select>

      <Select {...register('period')}>
        <MenuItem value="1">1h</MenuItem>
        <MenuItem value="3">3h</MenuItem>
        <MenuItem value="5">5h</MenuItem>
        <MenuItem value="10">10h</MenuItem>
        <MenuItem value="24">1d</MenuItem>
        <MenuItem value="72">3d</MenuItem>
        <MenuItem value="148">7d</MenuItem>
      </Select>

      <Select {...register('type')}>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="leaked">기밀유출</MenuItem>
        <MenuItem value="fakenews">가짜뉴스 의심</MenuItem>
      </Select>

      <Button variant="variant" type="submit">
        search
      </Button>
    </form>
  );
}
