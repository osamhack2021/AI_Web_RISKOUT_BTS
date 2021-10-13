import * as React from 'react';

import { styled } from '@mui/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

import '../../css/ExclusiveSelect.css';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    // margin: theme.spacing(0.5),
    borderRadius: '5px',
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: '5px',
      //   borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: '5px',
      //   borderRadius: theme.shape.borderRadius,
    },
  },
  '& .Mui-selected': {
    backgroundColor: '#d0e4ff',
    fontWeight: 'bold',
  },
}));

export default function ToggleButtons({
  selectOptions,
  selectedValue,
  setSelectedValue,
  selectHandler,
}) {
  const handleSelectedValue = (event, newSelectedValue) => {
    if (newSelectedValue !== null) {
      setSelectedValue(newSelectedValue);
      selectHandler(newSelectedValue);
    }
  };

  return (
    <StyledToggleButtonGroup
      value={selectedValue}
      exclusive
      onChange={handleSelectedValue}
      aria-label="select value"
      className="period-select"
    >
      {selectOptions.map((val) => (
        <ToggleButton value={val} key={val} aria-label={'last ' + val}>
          {val}
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
}
