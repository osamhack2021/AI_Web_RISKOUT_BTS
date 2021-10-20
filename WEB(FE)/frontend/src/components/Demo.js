import React from 'react';
import { Box, Chip, TextField } from '@mui/material';

export default function Demo(demoPaddingTop, demoPaddingLeft) {
  return (
    <Box sx={{ display: "flex", marginBottom: "3px" }}>
      <Chip label="Demo" color="warning" sx={{ color: "white", fontWeight: "bold" }} />
      <h4 style={{ color: "darkgray", marginLeft: "7px", marginTop: "5px" }}>본 페이지는 실제 데이터들로 이루어진 데모 페이지이며, 일부 기능은 제공하지 않습니다.</h4>
    </Box>
  );
}
