import { useState } from 'react';
import { useForm, Controller, register } from 'react-hook-form';

import { Button } from '@mui/material';
import SearchBar from './SearchBar';

export default function SearchForm() {
  const { handleSubmit, reset, setValue, control } = useForm({});
  const onSubmit = ({ request }) => console.log(request);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        render={({ field }) => <SearchBar {...field} setValue={setValue} />}
        defaultValue={{}}
      />
      <Button variant="contained" color="primary" type="submit">
        search
      </Button>
    </form>
  );
}
