import { getLineBreakText, desanitizeText, debackslash } from '../../js/util';
import { Chip, Stack, Link, Grid } from '@mui/material';

export default function ScrappedArticle({
  url,
  title,
  summary,
  characteristics,
  sourceName,
  datetime,
}) {
  const renderCharacteristic = (c, i) => (
    <Chip
      label={c}
      variant="outlined"
      size="medium"
      sx={{ height: '2.4rem', fontSize: '1rem' }}
      key={'chip' + i}
    />
  );

  return (
    <Grid
      item
      width="100%"
      component="article"
      sx={{ fontSize: '20px', mb: '1.4rem' }}
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener"
        underline="hover"
        sx={{ fontSize: '21px' }}
      >
        <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
      </Link>
      {getLineBreakText(desanitizeText(summary))}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: '1rem' }}
      >
        <Stack direction="row" spacing={1}>
          {Array.isArray(characteristics)
            ? characteristics.map(renderCharacteristic)
            : typeof characteristics === 'string' ||
              characteristics instanceof String
            ? renderCharacteristic(characteristics)
            : null}
        </Stack>
        <Link
          href={url}
          target="_blank"
          rel="noopener"
          underline="hover"
          sx={{ color: 'lightslategrey' }}
        >
          <em style={{ fontStyle: 'normal' }}>원본:</em> {sourceName} {datetime}
        </Link>
      </Grid>
    </Grid>
  );
}
