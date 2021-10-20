import { useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  IconButton,
  TablePagination,
  TableFooter,
  Typography,
  LinearProgress,
} from '@mui/material';
import SecretsTableRow from './SecretsTableRow';
import { searchState, useContents } from '../../atoms/searchState';
import { useSessionStorage } from '../../js/util';
import useSearchInitEffect from '../../hooks/useSearchInitEffect';

import { useTheme } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="처음 페이지"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="현재 페이지"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="다음 페이지"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="마지막 페이지"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function DetectionTable({ showDetailModal, toggleScrap }) {
  useSearchInitEffect();
  const contents = useContents();
  const { isDone } = useRecoilValue(searchState);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - contents.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const [, , , isInCart] = useSessionStorage('riskoutShoppingCart');

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ background: '#2d333b', boxShadow: 'none' }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="6%">
              <Typography
                variant="h6"
                sx={{ fontFamily: 'Noto sans KR' }}
                style={{ fontWeight: 'bold' }}
                color="textPrimary"
              >
                유형
              </Typography>
            </TableCell>
            <TableCell width="74%" align="center">
              <Typography
                variant="h6"
                sx={{ fontFamily: 'Noto sans KR' }}
                style={{ fontWeight: 'bold' }}
                color="textPrimary"
              >
                제목
              </Typography>
            </TableCell>
            <TableCell width="10%" align="center">
              <Typography
                variant="h6"
                sx={{ fontFamily: 'Noto sans KR' }}
                style={{ fontWeight: 'bold' }}
                color="textPrimary"
              >
                글쓴이
              </Typography>
            </TableCell>
            <TableCell width="10%" align="center">
              <Typography
                variant="h6"
                sx={{ fontFamily: 'Noto sans KR' }}
                style={{ fontWeight: 'bold' }}
                color="textPrimary"
              >
                스크랩
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contents &&
            (rowsPerPage > 0
              ? contents.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : contents
            ).map((article, id) => (
              <SecretsTableRow
                key={id}
                isAlreadyScrapped={isInCart(article._id)}
                {...{ article, showDetailModal, toggleScrap }}
              />
            ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[4]}
              colSpan={4}
              count={contents.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
