import React, { useEffect, useRef } from 'react';
import SearchBar from '../components/SearchBar';
import {
  Box,
  Chip,
  Stack,
  Link,
  Grid,
  Typography,
  Skeleton,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import axios from 'axios';
import '../css/fonts.css';

import ExclusiveSelect from '../components/RiskReport/ExclusiveSelect';
import graphImage from '../images/sub/graph_img.jpg';
import useFetch from '../hooks/useFetch';
import { getLineBreakText, useSessionStorage } from '../js/util';
import ThreatMediaCard from '../components/RiskReport/ThreatMediaCard';
import PdfExportButton from '../components/RiskReport/PdfExportButton';
import Graphs from '../components/RiskReport/Graphs';
import ScrappedArticle from '../components/RiskReport/ScrappedArticle';
// import { Box } from '@mui/system';

import { darkTheme, palette } from '../darkTheme';

const RiskReport = (props) => {
  const [getCart, addCart] = useSessionStorage('riskoutShoppingCart');
  const [dateRange, setDateRange] = React.useState('all'); // for period select
  const [data, setData] = React.useState({});
  const [isPending, setPending] = React.useState(true);
  const error = false;

  useEffect(() => {
    const searchUrl = '/api/nlp/report/';
    const exampleSearchUrl = '/static/ReportData.example.json';

    async function fetchSearch() {
      setPending(true);
      if (process.env.REACT_APP_USE_STATIC_RESPONSE == 'True') {
        axios.get(exampleSearchUrl).then((data) => {
          console.log(data.data);
          setData(data.data);
          setPending(false);
        });
      } else {
        axios
          .post(searchUrl, {
            articleIds: getCart().length ? getCart() : [30, 40, 50],
            period: 24,
            time: new Date().toTimeString(), // "uniqueness parameter"
          })
          .then((data) => {
            console.log(data.data);
            setData(data.data);
            setPending(false);
          });
      }
    }
    fetchSearch();
  }, []);

  const pdfExportComponent = useRef(null);

  /*
    // if using POST request with request options
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        topic: 'Hacker', // organization name?
        dateRange: dateRange, // user selected
        articleIds: [1, 2, 3], // get from sessionStorage
      }),
    }
  */

  const loadingScreen = (
    <section id="sub_contents" style={{ width: '100vw', height: '100vh' }}>
      <div className="sub01_wrap" style={{ marginBottom: 40 }}>
        <h2 className="h2_tit2">보고서 생성 중...</h2>
      </div>
      <div className="content clfix">
        <Skeleton animation="wave" height={45} width="45%" />
        <Skeleton animation="wave" height={35} width="40%" />
        <Skeleton animation="wave" height={30} width="35%" />
        <Skeleton
          animation="wave"
          height={30}
          width="20%"
          style={{ marginBottom: 26 }}
        />
        
        <Box sx={{ display: 'flex' }}>
          <Box>
            {/* 일일 리스크 현황 */}
            <Skeleton
              sx={{
                borderRadius: '5px',
                marginTop: '13px',
                marginRight: '33px',
              }}
              width={879}
              height={450}
              animation="wave"
              variant="rectangular"
            />
          </Box>
          <Box>
            <Skeleton
            sx={{ borderRadius: '5px', marginTop: '13px' }}
            width={879}
            height={450}
            animation="wave"
            variant="rectangular"
            />
          </Box>
        </Box>

        {/* 리스크 종류별 비율 (%) */}
        
      </div>
    </section>
  );

  const errorScreen = (
    <section id="sub_contents">
      <div className="sub01_wrap">
        <h2 className="h2_tit2">Error</h2>
      </div>
      <div className="content clfix"></div>
    </section>
  );

  // select handler is not required.
  // when dateRange changes selected happens due to the useFetch hook
  const selectHandler = (dateRange) => {
    alert('dateRange changed ' + dateRange);
  };

  return (
    <>
      {isPending ? (
        loadingScreen
      ) : error ? (
        errorScreen
      ) : (
        <section id="sub_contents" ref={pdfExportComponent}>
          <PdfExportButton exportTarget={pdfExportComponent} />
          <Box className="sub01_wrap">
            <Grid container spacing={1} direction="column">
              <Grid item>
                <Typography variant="h2">
                  Risk Report{' '}
                  <em style={{ fontSize: '0.5em' }}>
                    {new Intl.DateTimeFormat('ko-KR', {
                      dateStyle: 'full',
                    }).format(new Date())}{' '}
                    (24h)
                  </em>
                </Typography>
              </Grid>
              <Grid item>
                <Typography>{getLineBreakText(data.overview)}</Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1} mt={3} direction="column">
              <Grid item>
                {/* <Typography variant="h3">리스크 브리핑</Typography> */}
              </Grid>
              <Grid item>
                <ExclusiveSelect
                  selectOptions={['1d', '1wk', '1m', '1yr', 'all']}
                  selectedValue={dateRange}
                  setSelectedValue={setDateRange}
                  selectHandler={selectHandler}
                />
              </Grid>

              <Grid
                item
                container
                spacing={5}
                mt={1}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Grid item xs={12} md={6}>
                  <Graphs data={data.briefingGraphData} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container direction="column" spacing={3}>
                    {data.briefingContents.map((props, i) => {
                      return (
                        <ScrappedArticle key={'scrapped' + i} {...props} />
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              className="content clfix"
              direction="column"
              spacing={3}
              mt={1}
            >
              <Grid item>
                <Typography variant="h3">중대 위협</Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                sx={{ mt: '1rem' }}
              >
                {data.majorEvents.map(
                  ({
                    imageUrl,
                    title,
                    threatType,
                    sourceName,
                    url,
                    datetime,
                  }) => (
                    <ThreatMediaCard
                      imageUrl={imageUrl}
                      title={title}
                      threatType={threatType}
                      sourceName={sourceName}
                      url={url}
                      datetime={datetime}
                      key={title}
                    />
                  )
                )}
              </Grid>
            </Grid>
          </Box>
        </section>
      )}
    </>
  );
};

export default RiskReport;
