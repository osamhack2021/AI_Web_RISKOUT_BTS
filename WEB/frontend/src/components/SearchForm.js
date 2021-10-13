import { useState } from 'react';
import { useForm, Controller, register } from 'react-hook-form';

import { Button, Stack, Select, MenuItem, FormControl } from '@mui/material';
import SearchBar from './SearchBar';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { searchState } from '../atoms/searchState';
import { searchSettingState } from '../atoms/searchSettingState';
import axios from 'axios';

export default function SearchForm() {
  const { handleSubmit, register, setValue, control } = useForm({});
  const setSearch = useSetRecoilState(searchState);
  const searchSetting = useRecoilValue(searchSettingState);
  const onSubmit = async ({ category, type, period }) => {
    // TODO 검색 api와 연동
    console.log('[Fetching with Form]...');
    console.log('category', category);
    console.log('period', period);
    console.log('tags', searchSetting);
    console.log('type', type);

    const response = await axios.get(`/static/search.json`);
    console.log(response.data);
    setSearch(response.data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-form">
      <Controller
        control={control}
        render={({ field }) => <SearchBar {...field} setValue={setValue} />}
        defaultValue={{}}
      />
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Select size="small" defaultValue="all" {...register('category')}>
          <MenuItem value="all">전체</MenuItem>
          <MenuItem value="news">뉴스</MenuItem>
          <MenuItem value="sns">SNS</MenuItem>
        </Select>

        <Select size="small" defaultValue="all" {...register('type')}>
          <MenuItem value="all">전체</MenuItem>
          <MenuItem value="leaked">기밀유출 의심</MenuItem>
          <MenuItem value="fakenews">가짜뉴스 의심</MenuItem>
        </Select>

        <Select size="small" defaultValue="24" {...register('period')}>
          <MenuItem value="1">1h</MenuItem>
          <MenuItem value="3">3h</MenuItem>
          <MenuItem value="5">5h</MenuItem>
          <MenuItem value="10">10h</MenuItem>
          <MenuItem value="24">1d</MenuItem>
          <MenuItem value="72">3d</MenuItem>
          <MenuItem value="148">7d</MenuItem>
        </Select>

        <Button size="small" variant="outlined" type="submit">
          search
        </Button>
      </Stack>
    </form>
  );
}
