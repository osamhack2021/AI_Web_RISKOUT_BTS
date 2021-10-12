import { ResponsiveBar } from '@nivo/bar';
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  LinearProgress,
  Divider,
} from '@mui/material';

const SentimentBar = ({ colors, data }) => {
  return (
    <Card style={{ height: '400px' }}>
      <CardHeader title="일일 리스크 현황" />
      <Divider />
      {data ? (
        <CardContent>
          <Box
            sx={{
              height: 350,
              position: 'relative',
            }}
          >
            <ResponsiveBar
              data={data}
              keys={['value']}
              indexBy="category"
              margin={{ top: 0, right: 100, bottom: 100, left: 80 }}
              padding={0.4}
              layout="vertical"
              valueScale={{ type: 'linear' }}
              indexScale={{ type: 'band', round: true }}
              valueFormat={{ format: '', enabled: false }}
              colors={colors}
              borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                // legend: 'sentiment',
                // legendPosition: 'middle',
                // legendOffset: 32,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -40,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
              // legends={[
              //   {
              //     dataFrom: 'keys',
              //     anchor: 'bottom-right',
              //     direction: 'column',
              //     justify: false,
              //     translateX: 120,
              //     translateY: 0,
              //     itemsSpacing: 2,
              //     itemWidth: 100,
              //     itemHeight: 20,
              //     itemDirection: 'left-to-right',
              //     itemOpacity: 0.85,
              //     symbolSize: 10,
              //     effects: [
              //       {
              //         on: 'hover',
              //         style: {
              //           itemOpacity: 1,
              //         },
              //       },
              //     ],
              //   },
              // ]}
            />
          </Box>
        </CardContent>
      ) : (
        <Box sx={{ width: '100%', color: 'grey.500' }}>
          <LinearProgress color="inherit" />
        </Box>
      )}
    </Card>
  );
};

export default SentimentBar;
