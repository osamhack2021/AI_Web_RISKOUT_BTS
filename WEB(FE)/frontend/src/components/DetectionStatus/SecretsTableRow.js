import { Stack, Link, Typography, TableCell, TableRow } from '@mui/material';
import { red, green } from '@mui/material/colors';

import { VscGistSecret, VscPreview } from 'react-icons/vsc';

import ScrapButton from './ScrapButton';

function CategorizedIcon({ isLeaked, isFakeNews }) {
  if (isFakeNews) return <VscPreview color={red[500]} size={24} />;
  else if (isLeaked) return <VscPreview color={green[500]} size={24} />;
  else return <VscPreview color={green[500]} size={24} />;
}

export default function SecretsTableRow({
  article,
  showDetailModal,
  toggleScrap,
  isAlreadyScrapped,
}) {
  const {
    _id,
    title,
    category,
    summarized,
    author,
    href,
    contentBody,
    true_score,
    isLeaked,
    isFakeNews,
  } = article;

  return (
    <TableRow
      key={_id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Link href={href} underline="hover">
          <CategorizedIcon isLeaked={isLeaked} isFakeNews={isFakeNews} />
        </Link>
      </TableCell>
      <TableCell
        align="left"
        onClick={() => showDetailModal(_id)}
        style={{ cursor: 'pointer' }}
      >
        <Stack spacing={1.2}>
          <Typography
            sx={{ fontFamily: 'Noto sans KR', fontSize: '1.15rem' }}
            style={{ fontWeight: 'bold' }}
            color="textPrimary"
          >
            {category === 'sns' ? '트위터에서 가져온 글입니다.' : title}
          </Typography>
          <Typography color="textSecondary" sx={{ fontSize: '1.1rem' }}>
            {category === 'sns' ? contentBody : summarized}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell align="center">
        <Typography variant="body1">{author}</Typography>
      </TableCell>
      <TableCell align="center">
        <ScrapButton
          toggleScrap={(shouldScrap: Boolean) => toggleScrap(_id, shouldScrap)}
          isAlreadyScrapped={isAlreadyScrapped}
        />
      </TableCell>
    </TableRow>
  );
}
