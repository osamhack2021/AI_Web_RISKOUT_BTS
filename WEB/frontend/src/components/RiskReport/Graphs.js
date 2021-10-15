import DailyRiskGraph from './DailyRiskGraph';
import RiskTypeGraph from './RiskTypeGraph';

import { Container, Box, Grid, Stack } from '@mui/material';

import { darkTheme, palette } from '../../darkTheme';

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
        <RiskTypeGraph theme={darkTheme} colors={palette} data={pieData} />
      </Grid>
      <Grid item xs={12}>
        <DailyRiskGraph theme={darkTheme} colors={palette} data={barData} />
      </Grid>
    </Stack>
  );
}

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
