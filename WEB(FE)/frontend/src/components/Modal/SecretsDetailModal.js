import { useState, useEffect } from 'react';
import { Box, Stack, Chip, Link, Modal, Typography } from '@mui/material';
import {
  getHighlightedText,
  getLineBreakText,
  getNodeText,
  replaceNewline,
} from '../../js/util';
import '../../css/SecretsDetailModal.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AnalyzeIcon from '@mui/icons-material/Analytics';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Link';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  maxHeight: '70vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SecretsDetailModal(props) {
  const { isOpen, setOpen, data, scrapArticle, analyzePage } = props;
  const { isSaved, setSaved } = useState(false);
  const entityNames = Object.entries(data.entities).flatMap((x) => x[1]);
  // console.log(entityNames, getHighlightedText);

  const handleClose = () => {
    setOpen(false);
    // setSaved(false); // TODO how should we handle display of 'save' button?
  };
  const cart = sessionStorage.getItem('riskoutShoppingCart');
  useEffect(() => console.log(data));

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="secrets-modal-title"
        aria-describedby="secrets-modal-description"
      >
        <Box sx={style}>
          <Typography id="secrets-modal-title" variant="h6" component="h2">
            <Link
              href={data.site_url}
              color="inherit"
              underline="hover"
              target="_blank"
              rel="noopener"
              title="원본 페이지 보기"
            >
              <NavigationIcon sx={{ mr: 1 }} />
            </Link>
            {data.title}
            <hr align="left" />
          </Typography>
          <Stack direction="row" justifyContent="flex-end" spacing={1}>
            <Chip
              style={{ borderRadius: '6px' }}
              variant="outlined"
              aria-label="add to scrap"
              onClick={() => scrapArticle(data._id)}
              icon={<AddIcon />}
              label="Save"
            />
            <Chip
              style={{ borderRadius: '6px' }}
              variant="outlined"
              aria-label="Detailed Analysis"
              onClick={() => analyzePage(data._id)}
              icon={<AnalyzeIcon />}
              label="Analyze"
            />

            <Chip
              style={{ borderRadius: '6px' }}
              variant="outlined"
              onClick={() => {
                window.open(data.site_url, '_blank').focus();
              }}
              icon={<NavigationIcon sx={{ mr: 1 }} />}
              label="Source"
            />
          </Stack>
          {/* <Link href="#" color="inherit" underline="hover">Page Analysis</Link>
                    <Button onClick={scrapArticle}>Save article</Button> */}

          <Typography
            id="secrets-modal-description"
            sx={{ mt: 2 }}
            className="line-break"
          >
            <Box sx={{ lineHeight: 1.75, m: 1 }}>
              {/* Insert highlighted version */}
              {getHighlightedText(
                replaceNewline(data.contentBody, 2),
                entityNames.length ? entityNames : ['']
              )}

              {/* {data.summarized} */}

              {/* <pre>
                        {JSON.stringify(data, null, 4)}
                        </pre> */}
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
