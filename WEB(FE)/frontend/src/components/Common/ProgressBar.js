import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/styles';

const Progress = styled(Box)({
  lineHeight: 1,
  position: 'relative',
  padding: '5px',
  borderRadius: '3px',
  width: '100%',
  backgroundColor: 'rgb(234, 238, 243)',
});

const ProgressText = styled(Box)({
  fontWeight: '700',
  color: 'rgb(32, 38, 45)',
  position: 'relative',
  zIndex: '1',
});

const ProgressDone = styled(Box)({
  borderRadius: '3px',
  position: 'absolute',
  height: '100%',
  left: '0px',
  top: '0px',
  backgroundColor: 'rgb(255, 189, 194)',
});

export default function ProgressBar({ value }) {
  const [style, setStyle] = useState({});
  setTimeout(() => {
    let bgColor = 'rgb(255, 189, 194)';
    if (value > 0.33) bgColor = 'rgb(255, 217, 128)';
    if (value > 0.66) bgColor = 'rgb(106, 231, 156)';
    const newStyle = {
      opacity: 1,
      width: `${value * 100}%`,
      backgroundColor: bgColor,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <Progress>
      <ProgressText>{Math.round(value * 100)}%</ProgressText>
      <ProgressDone style={style}></ProgressDone>
    </Progress>
  );
}
