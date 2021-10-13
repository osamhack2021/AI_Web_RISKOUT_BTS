import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { Grid, Typography } from '@mui/material';

import DetectionTable from '../components/DetectionStatus/DetectionTable';
import FilterBar from '../components/DetectionStatus/FilterBar';
import SearchForm from '../components/SearchForm';
import SecretsDetailModal from '../components/Modal/SecretsDetailModal';
import { useSessionStorage } from '../js/util';

import { useRecoilValue } from 'recoil';
import { searchState } from '../atoms/searchState';
import useSearchEffect from '../hooks/useSearchInitEffect';
import { appliedFilterListState } from '../atoms/appliedFilterMapState';

export default function DetectionStatus() {
  useSearchEffect(); // init

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

  const showDetailModal = (_id) => {
    const data = search.contents.filter((x) => x._id == _id).pop(0); // popping doesn't affect original array
    console.log(
      data,
      search.contents.filter((x) => x._id == _id),
      search
    );
    setDetailModalData(data);
    setDetailModalOpen(true);
  };

  const [getCart, addCart] = useSessionStorage('riskoutShoppingCart');
  const { enqueueSnackbar } = useSnackbar();
  const scrapArticle = (_id) => {
    addCart(_id);
    const article = search.contents.filter((x) => x._id == _id).pop(0);
    enqueueSnackbar('Scrapped article | ' + article.title, {
      variant: 'success',
      autoHideDuration: 10000,
    });
  };

  const analyzePage = (id) => {
    console.log('TODO: analyzePage article ', id);
    alert('TODO: analyzePage article ' + id);
  };

  return (
    <Grid container spacing={3}>
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
        <Grid item justify="center">
          <DetectionTable
            showDetailModal={showDetailModal}
            scrapArticle={scrapArticle}
          />
        </Grid>
      </Grid>
      <Grid
        item
        sx={{ mt: '29px' }}
        md={2}
        display={{ xs: 'none', md: 'block' }}
      >
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
