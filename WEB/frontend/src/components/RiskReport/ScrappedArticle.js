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
  const renderCharacteristic = (c, i) => {
    const chars = [
      '욕설',
      '악의성',
      '성차별',
      '인종차별',
      '정치적 편향',
      '거짓 뉴스 의심',
      '긍정적',
      '부정적',
    ];
    const palette = [
      'primary',
      'secondary',
      'error',
      'info',
      'success',
      'warning',
    ];

    const color =
      chars.indexOf(c) > -1
        ? palette[chars.indexOf(c) % palette.length]
        : 'default';
    return (
      <Chip
        label={c}
        variant="outlined"
        size="medium"
        sx={{ height: '3.2rem', fontSize: '1.3rem' }}
        key={'chip' + i}
        color={color}
      />
    );
  };

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
