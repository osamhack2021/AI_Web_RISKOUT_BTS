import { useState } from 'react';
import Box from '@mui/material/Box';
import AutocompleteInSearch from './AutocompleteInSearch';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

export const sampleData = {
  rows: [
    ["pdf", "3함대 함정 내부 사진..", "임민석"],
    ["hwp", "독도함 출항 일정 ..", "서종잔"],
    ["hwp", "2함대 함정 내부 사진..", "감대원"],
    ["txt", "1함대 함정 내부 사진..", "조정완"],
    ["pdf", "해군본부 지통실 ..", "백용준"],
    ["csv", "계룡 벙커..", "이동건"],
    ["txt", "작전사 함정 중 피항 예정 함정 ..", "소명근"]
  ]
};
  
export const sampleOptions = {
  headers: ["파일 유형", "내용", "작성자"]
};

export default function Search() {
  return (
    <Box>
      <AutocompleteInSearch tableData={sampleData} options={sampleOptions} />
    </Box>
  );
}
