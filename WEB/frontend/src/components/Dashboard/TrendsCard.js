import {
  Card,
  CardHeader,
  CardContent,
  Box,
  LinearProgress,
  Divider,
  Chip,
  Pagination,
  Typography,
  Link,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DataGrid, useGridSlotComponentProps } from '@mui/x-data-grid';
import moment from 'moment';
import ProgressBar from '../Common/ProgressBar';
import useFetch from '../../hooks/useFetch';
import '../../css/pageStyle.css';

const columns = [
  {
    field: 'trueScore',
    headerName: '팩트체크',
    width: 80,
    renderCell: (params) => (
      <div>
        {params.value >= 0.6 ? (
          <Chip color="success" label="진실추정" />
        ) : (
          [
            params.value >= 0.4 ? (
              <Chip color="warning" label="중립추정" />
            ) : (
              <Chip color="error" label="가짜추정" />
            ),
          ]
        )}
      </div>
    ),
  },
  {
    field: 'title',
    headerName: '제목',
    flex: 1,
    minWidth: 150,
    renderCell: ({ row: { title, site_url } }) => {
      return (
        <Link
          sx={{ color: 'white' }}
          target="_blank"
          underline="none"
          href={site_url}
          variant="body2"
        >
          {title}
        </Link>
      );
    },
  },
  {
    field: 'date',
    headerName: '날짜',
    width: 80,
    renderCell: (params) => (
      <Typography>{moment(params.value).format('YY-MM-DD')}</Typography>
    ),
  },
  {
    field: 'emotionFilled',
    headerName: '긍정지수',
    width: 100,
    renderCell: (params) => <ProgressBar value={Number(params.value)} />,
  },
];

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

function CustomPagination() {
  /* Custom Footer Pagination */
  const { state, apiRef } = useGridSlotComponentProps();
  const classes = useStyles();

  return (
    <Pagination
      className={classes.root}
      shape="rounded"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

export default function TrendsCard() {
  const requestUrl =
    process.env.REACT_APP_USE_STATIC_RESPONSE == 'True'
      ? `/static/data/trends.json`
      : `/api/nlp/trends`;
  const { data, error, isPending } = useFetch(requestUrl, {
    method: 'GET',
  });

  return (
    <Card style={{ width: '100%', height: '400px' }}>
      <CardHeader title="트렌드" />
      <Divider />
      {isPending ? (
        <Box sx={{ width: '100%', color: 'grey.500' }}>
          <LinearProgress color="inherit" />
        </Box>
      ) : error ? (
        <Box sx={{ width: '100%', color: 'grey.500' }}>
          <LinearProgress color="inherit" />
        </Box>
      ) : (
        <CardContent>
          <Box sx={{ width: '100%', height: 300 }}>
            <DataGrid
              rows={data.response}
              columns={columns}
              pagination
              pageSize={4}
              rowsPerPageOptions={[4]}
              components={{
                Pagination: CustomPagination,
              }}
            />
          </Box>
        </CardContent>
      )}
    </Card>
  );
}
