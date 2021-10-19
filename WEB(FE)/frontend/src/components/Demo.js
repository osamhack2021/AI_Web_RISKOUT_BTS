import React from 'react';
import { Box, Chip, TextField } from '@mui/material';

export default function Demo(demoPaddingTop, demoPaddingLeft) {
  return(
    <Box sx={{ display: "flex", marginBottom: "35px" }}>
      <Chip label="Demo" color="warning" sx={{ color: "white", fontWeight: "bold" }}/>
      <h4 style={{ color: "darkgray", paddingTop: "6px", paddingLeft: "10px" }}>본 페이지는 BETA 테스트 시범운영중으로 일부 오류가 발생할 수 있습니다.</h4>
    </Box> 
  );
}
