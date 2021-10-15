import { ResponsivePie } from '@nivo/pie';
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  LinearProgress,
  Divider,
} from '@mui/material';

const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
  const values = dataWithArc.map((d) => d.value);
  console.log(values);
  const maximum = Math.max(...values);
  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: '50px',
        fontWeight: 600,
      }}
    >
      {`${maximum} %`}
    </text>
  );
};

export default function RiskTypeGraph({ theme, colors, data }) {
  return (
    <Card style={{ height: '400px' }}>
      <CardHeader title="리스크 종류별 비율 (%)" />
      <Divider />

      {data ? (
        <CardContent>
          <Box
            sx={{
              height: 350,
              position: 'relative',
            }}
          >
            <ResponsivePie
              theme={theme}
              data={data}
              margin={{ top: 0, right: 80, bottom: 100, left: 80 }}
              innerRadius={0.7}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              colors={colors}
              borderWidth={1}
              borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsThickness={2}
              arcLabelsSkipAngle={10}
              layers={[
                'arcs',
                'arcLabels',
                'arcLinkLabels',
                'legends',
                CenteredMetric,
              ]}
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              legends={[
                {
                  itemTextColor: '#ffffff',
                  anchor: 'bottom',
                  direction: 'column',
                  justify: false,
                  translateX: 300,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 140,
                  itemHeight: 25,
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000',
                      },
                    },
                  ],
                },
              ]}
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
}
