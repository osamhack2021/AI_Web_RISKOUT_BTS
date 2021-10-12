import DailyRiskGraph from './DailyRiskGraph';
import RiskTypeGraph from './RiskTypeGraph';

import { Container, Box, Grid, Stack } from '@mui/material';

export default function Graphs({ data }) {
  const barData = [
    { category: '기밀 유출 횟수', value: data.secretsCount },
    { category: '허위 뉴스 개수', value: data.fakeNewsCount },
    { category: '부정적 기사 비율 (%)', value: data.negativeSentiment * 100 },
  ];

  let total = 0;
  let pieData = Object.entries(data.tagRatio).map(([id, value]) => {
    total += value * 70;
    return {
      id: id,
      label: id,
      value: Math.round(value * 70 * 10) / 10,
    };
  });
  pieData = [
    {
      id: '저리스크 데이터',
      label: '저리스크 데이터',
      value: Math.round((100 - total) * 10) / 10,
    },
  ].concat(pieData);

  return (
    <Stack direction="column" container spacing={2}>
      <Grid item xs={12}>
        <DailyRiskGraph colors={options.colors} data={barData} />
      </Grid>
      <Grid item xs={12}>
        <RiskTypeGraph colors={options.colors} data={pieData} />
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
  },
  {
    id: 'lisp',
    label: 'lisp',
    value: 303,
  },
  {
    id: 'erlang',
    label: 'erlang',
    value: 193,
  },
  {
    id: 'php',
    label: 'php',
    value: 404,
  },
  {
    id: 'javascript',
    label: 'javascript',
    value: 530,
  },
];

const exampleBarData = [
  { category: 'News', positive: 48, neutral: 13, negative: 5 },
  { category: 'Twitter', positive: 92, neutral: 25, negative: 109 },
  { category: 'DC', positive: 71, neutral: 59, negative: 258 },
];
