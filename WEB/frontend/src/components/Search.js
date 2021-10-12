import { useState } from 'react';
import Box from '@mui/material/Box';
import AutocompleteInSearch from './AutocompleteInSearch';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <Box>
      <AutocompleteInSearch />
    </Box>
  );
}
