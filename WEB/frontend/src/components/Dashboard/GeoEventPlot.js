import { ResponsiveChoropleth } from '@nivo/geo';
import countries from './world_countries';
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  LinearProgress,
  Divider,
} from '@mui/material';
import useFetch from '../../hooks/useFetch';

const GeoEventPlot = ({ colors }) => {
  const { data, error, isPending } = useFetch(
    `https://playff-osamhack2021-ai-web-riskout-bts-45v7rgwx3j4vq-8000.githubpreview.dev/geo`
  );

  return (
    <Card style={{ height: '400px' }}>
      <CardHeader title="나라별 이벤트" />
      <Divider />

      {data ? (
        <CardContent>
          <Box
            sx={{
              height: 350,
              position: 'relative',
            }}
          >
            <ResponsiveChoropleth
              data={data}
              features={countries.features}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              colors={colors}
              domain={[0, 5000]}
              unknownColor="white"
              label="properties.name"
              valueFormat=".2s"
              projectionType="naturalEarth1"
              projectionTranslation={[0.5, 0.5]}
              projectionRotation={[0, 0, 0]}
              enableGraticule={true}
              graticuleLineColor="#dddddd"
              borderWidth={0.5}
              borderColor="#152538"
              legends={[
                {
                  anchor: 'bottom-left',
                  direction: 'column',
                  justify: true,
                  translateX: 20,
                  translateY: -100,
                  itemsSpacing: 0,
                  itemWidth: 94,
                  itemHeight: 18,
                  itemDirection: 'left-to-right',
                  itemTextColor: '#444444',
                  itemOpacity: 0.85,
                  symbolSize: 18,
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000000',
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
        <Box sx={{ width: '100%', color: 'grey.500' }}>
          <LinearProgress color="inherit" />
        </Box>
      )}
    </Card>
  );
};

export default GeoEventPlot;
