import React, { useEffect, useRef } from 'react';
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
      // axios
      //   .post(searchUrl, {
      //     articleIds: getCart().length ? getCart() : [30, 40, 50, 60],
      //     period: 24,
      //     time: new Date().toTimeString(), // "uniqueness parameter"
      //   }).then((data) => {
      //   console.log(data.data);
      //   setData(data.data);
      //   setPending(false);
      // });
      axios.get(exampleSearchUrl).then((data) => {
        console.log(data.data);
        setData(data.data);
        setPending(false);
      });
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
      <div className="sub01_wrap">
        <h2 className="h2_tit2">리스크 보고서 생성 중...</h2>
      </div>
      <div className="content clfix">
        <Skeleton
              animation="wave"
              height={75}
              width="15%"
            />
        <Skeleton
              animation="wave"
              height={15}
              width="40%"
            />
        <Skeleton
              animation="wave"
              height={15}
              width="30%"
              style={{ marginBottom: 26 }}
            />
        <Skeleton
              animation="wave"
              height={60}
              width="14%"
            />
        <Box sx={{display: 'flex'}}>
          <Skeleton sx={{ borderRadius: "10px", marginRight:'13px' }} width={120} height={45} animation="wave" variant="rectangular" />
          <Skeleton sx={{ borderRadius: "10px", marginRight:'13px' }} width={120} height={45} animation="wave" variant="rectangular" />
          <Skeleton sx={{ borderRadius: "10px", marginRight:'13px' }} width={120} height={45} animation="wave" variant="rectangular" />
          <Skeleton sx={{ borderRadius: "10px", marginRight:'13px' }} width={120} height={45} animation="wave" variant="rectangular" />
          <Skeleton sx={{ borderRadius: "10px", marginRight:'13px' }} width={120} height={45} animation="wave" variant="rectangular" />
        </Box>
        <Box sx={{display: 'flex'}}>
          <Box>
            {/* 일일 리스크 현황 */}
            <Skeleton sx={{ borderRadius: "10px", marginTop:'13px', marginRight:'33px' }} width={879} height={450} animation="wave" variant="rectangular" />
          </Box>
          <Box>
            {/* 일일 리스크 현황 옆 기사 */}
            {Array.from({ length: 4 }).map((_, i) => (
            <Box>
              <Skeleton
                key={i}
                animation="wave"
                width={500} height={50}
              />
              <Skeleton
                key={i}
                animation="wave"
                width={300} height={15}
              />
              <Skeleton
                key={i}
                animation="wave"
                width={350} height={15}
              />
              <Skeleton
                key={i}
                animation="wave"
                width={250} height={15}
              />
              <Skeleton
                key={i}
                animation="wave"
                width={400} height={15}
                sx={{ marginBottom:'13px' }}
              />
            </Box>
          ))}
          </Box>
        </Box>
        {/* 리스크 종류별 비율 (%) */}
        <Skeleton sx={{ borderRadius: "10px" }} width={879} height={400} animation="wave" variant="rectangular" />
        <Skeleton
          sx={{ borderRadius: "10px", marginTop: 10 }}
          animation="wave"
          height={95}
          width="15%"
        />
        <Box sx={{ display: 'flex' }}>
          <Skeleton sx={{ borderRadius: "10px", marginLeft: 20 , marginRight: 10 }} width={300} height={324} animation="wave" variant="rectangular" />
          <Skeleton sx={{ borderRadius: "10px", marginLeft: 20 , marginRight: 10 }} width={300} height={324} animation="wave" variant="rectangular" />
          <Skeleton sx={{ borderRadius: "10px", marginLeft: 20 , marginRight: 10 }} width={300} height={324} animation="wave" variant="rectangular" />
        </Box>
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
      {loadingScreen}
    </>
  );
};

export default RiskReport;
