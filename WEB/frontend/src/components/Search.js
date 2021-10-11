import { useState } from 'react';
import Box from '@mui/material/Box';
import AutocompleteInSearch from './AutocompleteInSearch';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { sampleData, sampleOptions } from './sample.js';

export default function Search() {
  return (
    <Box>
      <AutocompleteInSearch tableData={sampleData} options={sampleOptions} />
    </Box>
  );
}
