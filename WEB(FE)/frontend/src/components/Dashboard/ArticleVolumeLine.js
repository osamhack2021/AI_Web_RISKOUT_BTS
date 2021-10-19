import { ResponsiveLine } from '@nivo/line';
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Divider,
  LinearProgress,
  Typography,
} from '@mui/material';
import useFetch from '../../hooks/useFetch';
import { useState, useEffect } from 'react';

import { isEmpty } from 'lodash';

const ArticleVolumeLine = ({ theme, colors }) => {
  const requestUrl =
    process.env.REACT_APP_USE_STATIC_RESPONSE == 'True'
      ? `/static/data/articleVolume.json`
      : `/api/nlp/article/volume/`;
  const { data, error, isPending } = useFetch(requestUrl, {
    method: 'GET',
  });

  // 아래 코드는 실제 api 사용할 때만 필요
  const [response, setResponse] = useState([]);
  useEffect(() => {
    if (!isEmpty(data)) {
      setResponse(
        process.env.REACT_APP_USE_STATIC_RESPONSE == 'True'
          ? data.response
          : [
              { ...data.fake, color: 'hsl(142, 70%, 50%)' },
              { ...data.true, color: 'hsl(159, 70%, 50%)' },
            ]
      );
    }
  }, [data]);

  return (
    <Card style={{ height: '400px' }}>
      <CardHeader title="기사 변화량" />
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
            <ResponsiveLine
              theme={theme}
              data={response}
              margin={{ top: 10, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: 'point' }}
              yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: false,
                reverse: false,
              }}
              curve="monotoneX"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '기사 변화량',
                legendOffset: 36,
                legendPosition: 'middle',
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'volume',
                legendOffset: -40,
                legendPosition: 'middle',
              }}
              colors={colors}
              pointSize={10}
              pointColor={{ theme: 'background' }}
              pointBorderWidth={2}
              pointBorderColor={{ from: 'serieColor' }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  itemTextColor: '#eee',
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
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

export default ArticleVolumeLine;
