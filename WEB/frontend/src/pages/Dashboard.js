import SentimentBar from '../components/Dashboard/SentimentBar';
import SentimentPie from '../components/Dashboard/SentimentPie';
import ArticleVolumeLine from '../components/Dashboard/ArticleVolumeLine';
import GeoEventPlot from '../components/Dashboard/GeoEventPlot';
import WordCloud from '../components/Dashboard/WordCloud';
import TrendsCard from '../components/Dashboard/TrendsCard';

import { Container, Box, Grid } from '@mui/material';

export default function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <h2 style={{fontFamily: "Noto sans KR", fontSize: "2rem" }}>대시보드</h2>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={4}>
        <WordCloud options={options} />
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={4}>
        <ArticleVolumeLine colors={options.colors} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <TrendsCard />
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={4}>
        <SentimentBar colors={options.colors} />
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={3}>
        <SentimentPie colors={options.colors} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={5}>
        <GeoEventPlot colors={options.colors} />
      </Grid>
    </Grid>
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
