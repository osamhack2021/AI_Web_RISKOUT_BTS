import { Stack, Link, Typography, TableCell, TableRow } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ForumIcon from '@mui/icons-material/Forum';
import TwitterIcon from '@mui/icons-material/Twitter';
import DescriptionIcon from '@mui/icons-material/Description';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import InfoIcon from '@mui/icons-material/Info';
import { red, green } from '@mui/material/colors';

import { VscGistSecret, VscBook } from 'react-icons/vsc';

import ScrapButton from './ScrapButton';

function CategorizedIcon({ category, true_score }) {
  if (true_score < 0.4) return <VscBook color={red[500]} size={24} />;
  else return <VscGistSecret color={green[500]} size={24} />;
}

export default function SecretsTableRow({
  article,
  showDetailModal,
  scrapArticle,
  isAlreadyScrapped,
}) {
  const { _id, title, category, summarized, author, href, true_score } =
    article;

  return (
    <TableRow
      key={_id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Link href={href} underline="hover">
          <CategorizedIcon category={category} true_score={true_score} />
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
            {title}
          </Typography>
          <Typography color="textSecondary" sx={{ fontSize: '1.1rem' }}>
            {summarized}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell align="center">
        <Typography variant="body1">{author}</Typography>
      </TableCell>
      <TableCell align="center">
        <ScrapButton
          handleScrap={() => scrapArticle(_id)}
          isAlreadyScrapped={isAlreadyScrapped}
        />
      </TableCell>
    </TableRow>
  );
}
