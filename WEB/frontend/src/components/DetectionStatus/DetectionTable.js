import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import SecretsTableRow from './SecretsTableRow';

import { useRecoilValue } from 'recoil';
import { searchListState } from '../../atoms/searchListState';

export default function DetectionTable({ showDetailModal, scrapArticle }) {
  const searchList = useRecoilValue(searchListState);

  return (
    <TableContainer component={Paper} elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="10%">유형</TableCell>
            <TableCell width="70%" align="center">
              제목
            </TableCell>
            <TableCell width="10%" align="center">
              글쓴이
            </TableCell>
            <TableCell width="10%" align="center">
              스크랩
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchList.contents.map((article, id) => (
            <SecretsTableRow
              key={id}
              id={article.id}
              title={article.title}
              preview={article.preview}
              author={article.author}
              href={article.href}
              showDetailModal={showDetailModal}
              scrapArticle={scrapArticle}
            />
          ))}
        </TableBody>
        
      </Table>
    </TableContainer>
  );
}
