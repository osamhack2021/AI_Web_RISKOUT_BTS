import {
  IconButton,
  Link,
  Typography,
  TableCell,
  TableRow,
} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ForumIcon from '@mui/icons-material/Forum';
import DescriptionIcon from '@mui/icons-material/Description';

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
          <DescriptionIcon color="action" />
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
