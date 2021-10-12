import SentimentBar from './SentimentBar';
import SentimentPie from './SentimentPie';

import { Container, Box, Grid, Stack } from '@mui/material';

export default function Graphs({ pieData, barData }) {
  return (
    <Stack direction="column" container spacing={2}>
      <Grid item xs={12}>
        <SentimentBar colors={options.colors} data={exampleBarData} />
      </Grid>
      <Grid item xs={12}>
        <SentimentPie colors={options.colors} data={examplePieData} />
      </Grid>
    </Stack>
  );
}

const options = {
  // colors 를 바꾸면 전체 Theme 이 바뀝니다.
  colors: ['#01b8aa', '#28383c', '#fd625e', '#f2c80f', '#5f6b6d', '#8ad4eb'],
  // 1. ['#EEEEEE', '#686D76', '#373A40', '#00ADB5'],
  // 2. ['#003f5c', '#444e86', '#955196', '#dd5182', '#ff6e54', '#ffa600'],
  // 3. ['#01b8aa', '#28383c', '#fd625e', '#f2c80f', '#5f6b6d', '#8ad4eb'],
  // 4. ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
  // 5. ['#f4a522', '#6092cd', '#61b546', '#aa4498', '#dccc77', '#89cdf0'],
  enableTooltip: true,
  deterministic: true,
  fontFamily: 'impact',
  fontSizes: [15, 60],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  rotations: 2,
  rotationAngles: [-5, 5],
  scale: 'linear',
  spiral: 'rectangular',
  transitionDuration: 1000,
};

const examplePieData = [
  {
    id: 'css',
    label: 'css',
    value: 589,
    // color: 'hsl(64, 70%, 50%)',
  },
  {
    id: 'lisp',
    label: 'lisp',
    value: 303,
    // color: 'hsl(252, 70%, 50%)',
  },
  {
    id: 'erlang',
    label: 'erlang',
    value: 193,
    // color: 'hsl(69, 70%, 50%)',
  },
  {
    id: 'php',
    label: 'php',
    value: 404,
    // color: 'hsl(254, 70%, 50%)',
  },
  {
    id: 'javascript',
    label: 'javascript',
    value: 530,
    // color: 'hsl(37, 70%, 50%)',
  },
];

const exampleBarData = [
  [
    {
      country: 'AD',
      'hot dog': 17,
      burger: 102,
      sandwich: 140,
      kebab: 77,
      fries: 151,
      donut: 194,
    },
    {
      country: 'AE',
      'hot dog': 188,
      burger: 170,
      sandwich: 195,
      kebab: 41,
      fries: 198,
      donut: 194,
    },
    {
      country: 'AF',
      'hot dog': 95,
      burger: 153,
      sandwich: 162,
      kebab: 2,
      fries: 195,
      donut: 181,
    },
    {
      country: 'AG',
      'hot dog': 177,
      burger: 129,
      sandwich: 22,
      kebab: 8,
      fries: 27,
      donut: 19,
    },
    {
      country: 'AI',
      'hot dog': 94,
      burger: 159,
      sandwich: 28,
      kebab: 84,
      fries: 118,
      donut: 182,
    },
    {
      country: 'AL',
      'hot dog': 55,
      burger: 93,
      sandwich: 0,
      kebab: 68,
      fries: 62,
      donut: 96,
    },
    {
      country: 'AM',
      'hot dog': 158,
      burger: 151,
      sandwich: 47,
      kebab: 133,
      fries: 46,
      donut: 170,
    },
  ],
];
