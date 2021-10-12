import { useEffect } from 'react';
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
import { useContents } from '../../atoms/searchState';
import useSearchEffect from '../../hooks/useSearchEffect';

export default function DetectionTable({ showDetailModal, scrapArticle }) {
  useSearchEffect();
  const contents = useContents();

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
          {contents &&
            contents.map((content, id) => (
              <SecretsTableRow
                key={id}
                id={content._id}
                title={content.title}
                preview={content.preview}
                author={content.author}
                href={content.href}
                showDetailModal={showDetailModal}
                scrapArticle={scrapArticle}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
