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
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DataGrid, useGridSlotComponentProps } from '@mui/x-data-grid';
import moment from 'moment';
import ProgressBar from '../Common/ProgressBar';
import useFetch from '../../hooks/useFetch';
import "../../css/pageStyle.css"

const columns = [
  {
    field: 'trueScore',
    headerName: '팩트체크',
    width: 80,
    renderCell: (params) => (
      <div>
        {params.value >= 0.6 ? (
          <Chip color="success" label="진짜뉴스" />
        ) : (
          [
            params.value >= 0.4 ? (
              <Chip color="warning" label="의심뉴스" />
            ) : (
              <Chip color="error" label="가짜뉴스" />
            ),
          ]
        )}
      </div>
    ),
  },
  { field: 'title', headerName: '제목', flex: 1, minWidth: 150 },
  {
    field: 'date',
    headerName: '날짜',
    width: 100,
    renderCell: (params) => (
      <Typography>{moment(params.value).format('YYYY-MM-DD')}</Typography>
    ),
  },
  {
    field: 'emotionFilled',
    headerName: '감정수치',
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
  const { data, error, isPending } = useFetch();

  return (
    <Card style={{ width: '100%', height: '400px' }}>
      <CardHeader title="트렌드" />
      <Divider />
      {data ? (
        <CardContent>
          <Box sx={{ width: '100%', height: 300 }}>
            <DataGrid
              rows={data}
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
      ) : (
        <Box sx={{ width: '100%', color: 'grey.500' }}>
          <LinearProgress color="inherit" />
        </Box>
      )}
    </Card>
  );
}
