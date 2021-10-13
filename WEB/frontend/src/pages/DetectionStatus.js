import { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';

import AppliedFilters from '../components/DetectionStatus/AppliedFilter';
import DetectionTable from '../components/DetectionStatus/DetectionTable';
import FilterBar from '../components/DetectionStatus/FilterBar';
import SearchForm from '../components/SearchForm';
import SecretsDetailModal from '../components/Modal/SecretsDetailModal';
import { useSessionStorage } from '../js/util';

import { useRecoilValue } from 'recoil';
import { searchState } from '../atoms/searchState';
import useSeacrhEffect from '../hooks/useSearchInitEffect';
import { appliedFilterListState } from '../atoms/appliedFilterMapState';

export default function DetectionStatus() {
  useSeacrhEffect(); // init

  const search = useRecoilValue(searchState);
  const appliedFilterList = useRecoilValue(appliedFilterListState);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);
  const [detailModalData, setDetailModalData] = useState({
    id: 0,
    created_at: '',
    site_url: '',
    thumbnail_url: '',
    category: '',
    title: '',
    contentBody: '',
    summarized: '',
    positivity: 0,
    entities: {},
  });

  const showDetailModal = (id) => {
    const data = search.contents.filter((x) => x.id == id).pop(0); // popping doesn't affect original array
    console.log(
      data,
      search.contents.filter((x) => x.id == id),
      search
    );
    setDetailModalData(data);
    setDetailModalOpen(true);
  };

  const [getCart, addCart] = useSessionStorage('riskoutShoppingCart');

  const scrapArticle = (id) => {
    addCart(id);
    console.log('TODO: scrap article ', id);
    alert('TODO: scrap article ' + id + ' ' + getCart());
  };

  const analyzePage = (id) => {
    console.log('TODO: analyzePage article ', id);
    alert('TODO: analyzePage article ' + id);
  };

  return (
    <Grid container spacing={3} sx={{ marginLeft: '2em' }}>
      <Grid item xs={12} md={10} container spacing={3} direction="column">
        <Grid width="100%" item>
          <Typography
            mt={1}
            variant="h5"
            sx={{
              fontFamily: 'Noto sans KR',
              fontSize: '2rem',
              fontWeight: '600',
            }}
          >
            탐지 현황
          </Typography>
          <SearchForm />
          <Typography mt={3} color="primary">
            {search.totalContentsLength}개 결과 | {appliedFilterList.length}개
            필터 적용중
          </Typography>
        </Grid>
        {/* <Grid width="100%" item justify="center">
          <AppliedFilters />
        </Grid> */}
        <Grid item justify="center">
          <DetectionTable
            showDetailModal={showDetailModal}
            scrapArticle={scrapArticle}
          />
        </Grid>
      </Grid>
      <Grid item xs={0} md={2} display={{ xs: 'none', md: 'block' }}>
        <FilterBar />
      </Grid>
      <SecretsDetailModal
        isOpen={isDetailModalOpen}
        setOpen={setDetailModalOpen}
        scrapArticle={scrapArticle}
        data={detailModalData}
      />
    </Grid>
  );
}
