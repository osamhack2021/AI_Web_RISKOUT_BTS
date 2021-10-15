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
      {loadingScreen}
    </>
  );
};

export default RiskReport;
