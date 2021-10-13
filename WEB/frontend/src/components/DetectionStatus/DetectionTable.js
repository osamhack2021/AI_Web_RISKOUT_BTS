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

import { useContents } from '../../atoms/searchState';
import useSearchInitEffect from '../../hooks/useSearchInitEffect';

export default function DetectionTable({ showDetailModal, scrapArticle }) {
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
                preview={content.summarized}
                author={content.author}
                href={content.href}
                // contentBody={content.contentBody}
                showDetailModal={showDetailModal}
                scrapArticle={scrapArticle}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
