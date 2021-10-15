import * as React from 'react';

import { styled } from '@mui/styles';
import { ToggleButton, ToggleButtonGroup, Chip } from '@mui/material';
// import  from '@mui/material/ToggleButtonGroup';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

import '../../css/ExclusiveSelect.css';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    // margin: theme.spacing(0.5),
    borderRadius: '3px',
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: '3px',
      //   borderRadius: theme.shape.borderRadius,
      borderLeft: '1px solid #616161',
    },
    '&:first-of-type': {
      borderRadius: '3px',
      //   borderRadius: theme.shape.borderRadius,
    },
  },
  '& .MuiToggleButton-root': {
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    border: '1px solid #616161',
    transition:
      'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
  '& .MuiToggleButton-root:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  '& .Mui-selected': {
    backgroundColor: '#4d535c',
    fontWeight: '900',
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
        // <Chip
        //   style={{ borderRadius: '6px' }}
        //   variant="outlined"
        //   onClick={() => ''}
        //   label={val}
        //   value={val}
        //   key={val}
        //   aria-label={'last ' + val}
        // />
        <ToggleButton value={val} key={val} aria-label={'last ' + val}>
          {val}
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
}
