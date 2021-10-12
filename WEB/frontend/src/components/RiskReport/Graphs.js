import SentimentBar from '../Dashboard/SentimentBar';
import SentimentPie from '../Dashboard/SentimentPie';
import ArticleVolumeLine from '../Dashboard/ArticleVolumeLine';
import GeoEventPlot from '../Dashboard/GeoEventPlot';
import WordCloud from '../Dashboard/WordCloud';
import TrendsCard from '../Dashboard/TrendsCard';

import { Container, Box, Grid, Stack } from '@mui/material';

export default function Graphs() {
  return (
    <Stack direction="column" container spacing={2}>
      <Grid item xs={12}>
        <SentimentBar colors={options.colors} />
      </Grid>
      <Grid item xs={12}>
        <SentimentPie colors={options.colors} />
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
