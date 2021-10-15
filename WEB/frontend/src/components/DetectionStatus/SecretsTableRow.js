import { Stack, Link, Typography, TableCell, TableRow } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ForumIcon from '@mui/icons-material/Forum';
import TwitterIcon from '@mui/icons-material/Twitter';
import DescriptionIcon from '@mui/icons-material/Description';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import InfoIcon from '@mui/icons-material/Info';

import { VscGistSecret } from 'react-icons/vsc';

import ScrapButton from './ScrapButton';

function CategorizedIcon({ category }) {
  if (category == 'news') return <DescriptionIcon color="error" />;
  else if (category == 'sns') return <ForumIcon color="action" />;
  else return <InfoIcon color="action" />;
}

export default function SecretsTableRow({
  article,
  showDetailModal,
  scrapArticle,
  isAlreadyScrapped,
}) {
  const { _id, title, category, summarized, author, href } = article;

  return (
    <TableRow
      key={_id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Link href={href} underline="hover">
          <CategorizedIcon category={category} />
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
