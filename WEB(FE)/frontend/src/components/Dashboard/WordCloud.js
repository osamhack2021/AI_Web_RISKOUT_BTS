import { useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  LinearProgress,
  Divider,
  Typography,
} from '@mui/material';
import useFetch from '../../hooks/useFetch';

import { isEmpty } from 'lodash';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { useEffect } from 'react';

const WordCloud = ({ options }) => {
  const requestUrl =
    process.env.REACT_APP_USE_STATIC_RESPONSE == 'True'
      ? `/static/data/wordCloud.json`
      : `/api/nlp/wordcloud/`;
  const { data, error, isPending } = useFetch(requestUrl, {
    method: 'GET',
  });
  const [response, setResponse] = useState([]);
  useEffect(() => {
    if (data && data['response']) {
      setResponse(
        data.response.map(({ text, value }) => ({
          text,
          value: Math.ceil(Math.log2(value + 1)),
        }))
      );
    }
  }, [data]);

  return (
    <Card
      style={{ height: '400px', fontFamily: 'Noto sans KR', fontSize: '2rem' }}
    >
      <CardHeader title="오늘의 키워드" />
      <Divider />
      {isPending ? (
        <Box sx={{ width: '100%', color: 'grey.500' }}>
          <LinearProgress color="inherit" />
        </Box>
      ) : error ? (
        <Box sx={{ width: '100%', color: 'grey.500' }}>
          <LinearProgress color="inherit" />
        </Box>
      ) : !isEmpty(response) ? (
        <CardContent>
          <Box
            sx={{
              height: 300,
              position: 'relative',
            }}
          >
            <ReactWordcloud options={options} words={response} />
          </Box>
        </CardContent>
      ) : (
        <CardContent>
          <Typography>현재 데이터가 존재하지 않습니다.</Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default WordCloud;
