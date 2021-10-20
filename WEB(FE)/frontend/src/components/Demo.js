import React from 'react';
import { Box, Chip, TextField } from '@mui/material';

export default function Demo(demoPaddingTop, demoPaddingLeft) {
  return (
    <Box sx={{ display: "flex", marginBottom: "3px" }}>
      <Chip label="Beta" color="info" sx={{ color: "white", fontWeight: "bold" }} />
      <h4 style={{ color: "darkgray", marginLeft: "7px", marginTop: "5px" }}>본 페이지는 BETA 테스트 시범운영 중으로 일부 오류가 발생할 수 있습니다.</h4>
    </Box>
  );
}
