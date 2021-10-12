import {
  IconButton,
  Link,
  Typography,
  TableCell,
  TableRow,
} from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ForumIcon from '@mui/icons-material/Forum';
import DescriptionIcon from '@mui/icons-material/Description';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import InfoIcon from '@mui/icons-material/Info';

import ScrapButton from './ScrapButton';

export default function SecretsTableRow(props) {
  const {
    id,
    title,
    preview,
    author,
    href,
    showDetailModal,
    scrapArticle,
    isAlreadyScrapped,
  } = props;

  return (
    <TableRow
      key={id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Link href={href} underline="hover">
          {id % 2 === 0 ? <ListItemIcon><WarningAmberIcon color="action" /><DescriptionIcon color="action" /></ListItemIcon>  : <ListItemIcon><TheaterComedyIcon color="action" /></ListItemIcon>}
        </Link>
      </TableCell>
      <TableCell
        align="left"
        onClick={() => showDetailModal(id)}
        style={{ cursor: 'pointer' }}
      >
        <Typography sx={{fontFamily: "Noto sans KR"}} style={{ fontWeight: 'bold'}} color="textPrimary">
          {title}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {preview}
        </Typography>
      </TableCell>
      <TableCell align="center">{author}</TableCell>
      <TableCell align="center">
        <ScrapButton
          handleScrap={() => scrapArticle(id)}
          isAlreadyScrapped={isAlreadyScrapped}
        />
      </TableCell>
    </TableRow>
  );
}
