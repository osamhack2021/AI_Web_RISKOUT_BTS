import SentimentBar from '../components/Dashboard/SentimentBar';
import SentimentPie from '../components/Dashboard/SentimentPie';
import ArticleVolumeLine from '../components/Dashboard/ArticleVolumeLine';
import GeoEventPlot from '../components/Dashboard/GeoEventPlot';
import WordCloud from '../components/Dashboard/WordCloud';
import TrendsCard from '../components/Dashboard/TrendsCard';

import { Grid } from '@mui/material';

export default function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <h2 style={{ fontFamily: 'Noto sans KR', fontSize: '2rem' }}>
          대시보드
        </h2>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={4}>
        <WordCloud options={options} />
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={4}>
        <ArticleVolumeLine theme={darkTheme} colors={palette} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <TrendsCard />
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={4}>
        <SentimentBar theme={darkTheme} colors={palette} />
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={3}>
        <SentimentPie theme={darkTheme} colors={palette} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={5}>
        <GeoEventPlot theme={darkTheme} colors={palette} />
      </Grid>
    </Grid>
  );
}

const palette = ['rgb(84,114,234)', 'rgb(40,189,139)', 'rgb(250,81,81)'];
const options = {
  // colors 를 바꾸면 전체 Theme 이 바뀝니다.
  colors: [
    'rgb(255, 106, 105)',
    'rgb(255, 167, 37)',
    'rgb(84,114,234)',
    'rgb(40,189,139)',
    'rgb(250,81,81)',
  ],
  // ['#01b8aa', '#28383c', '#fd625e', '#f2c80f', '#5f6b6d', '#8ad4eb'],
  // 1. ['#EEEEEE', '#686D76', '#373A40', '#00ADB5'],
  // 2. ['#003f5c', '#444e86', '#955196', '#dd5182', '#ff6e54', '#ffa600'],
  // 3. ['#01b8aa', '#28383c', '#fd625e', '#f2c80f', '#5f6b6d', '#8ad4eb'],
  // 4. ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
  // 5. ['#f4a522', '#6092cd', '#61b546', '#aa4498', '#dccc77', '#89cdf0'],
  // mslee: ['rgb(255, 106, 105)']
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

export const darkTheme = {
  background: 'transparent',
  fontFamily: 'sans-serif',
  fontSize: 11,
  textColor: '#ffffff',
  axis: {
    domain: {
      line: {
        stroke: 'transparent',
        strokeWidth: 1,
      },
    },
    ticks: {
      line: {
        stroke: '#777777',
        strokeWidth: 1,
      },
      text: {},
    },
    legend: {
      text: {
        fontSize: 12,
      },
    },
  },
  grid: {
    line: {
      stroke: '#dddddd',
      strokeWidth: 1,
    },
  },
  legends: {
    hidden: {
      symbol: {
        fill: '#333333',
        opacity: 0.6,
      },
      text: {
        fill: '#333333',
        opacity: 0.6,
      },
    },
    text: {},
  },
  labels: {
    text: {},
  },
  markers: {
    lineColor: '#000000',
    lineStrokeWidth: 1,
    text: {},
  },
  dots: {
    text: {},
  },
  tooltip: {
    container: {
      background: 'black',
      color: 'inherit',
      fontSize: 'inherit',
      borderRadius: '2px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
      padding: '5px 9px',
    },
    basic: {
      whiteSpace: 'pre',
      display: 'flex',
      alignItems: 'center',
    },
    chip: {
      marginRight: 7,
    },
    table: {},
    tableCell: {
      padding: '3px 5px',
    },
    tableCellValue: {
      fontWeight: 'bold',
    },
  },
  crosshair: {
    line: {
      stroke: '#000000',
      strokeWidth: 1,
      strokeOpacity: 0.75,
      strokeDasharray: '6 6',
    },
  },
  annotations: {
    text: {
      fontSize: 13,
      outlineWidth: 2,
      outlineColor: '#ffffff',
    },
    link: {
      stroke: '#000000',
      strokeWidth: 1,
      outlineWidth: 2,
      outlineColor: '#ffffff',
    },
    outline: {
      fill: 'none',
      stroke: '#000000',
      strokeWidth: 2,
      outlineWidth: 2,
      outlineColor: '#ffffff',
    },
    symbol: {
      fill: '#000000',
      outlineWidth: 2,
      outlineColor: '#ffffff',
    },
  },
};
