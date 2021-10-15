import {
  Chip,
  Stack,
  Link,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';

export default function ThreatMediaCard(props) {
  const { imageUrl, title, threatType, sourceName, url, datetime } = props;

  const imgWidth = 450;
  const imgHeight = 200;
  return (
    <Grid item md={4} xs={12}>
      <Card
        variant="outlined"
        sx={{ backgroundColor: 'unset', border: 'unset' }}
      >
        <CardMedia
          component="img"
          height={`${imgHeight}`}
          image={imageUrl}
          sx={{
            height: `${imgHeight}px`,
            //  width: `${imgWidth}px`
          }}
          // crossorigin="use-credentials"
        />
        <CardContent>
          <Typography
            variant="h3"
            sx={{
              // mt: '1em',
              mb: '1em',
              fontSize: '1.3rem',
              height: '1.5em',
              lineHeight: '1.5',
              display: '-webkit-box',
              WebkitLineClamp: '1',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              // -webkit-box-orient: vertical;
            }}
          >
            {title}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            // sx={{ mt: '1rem' }}
          >
            <Stack direction="row" spacing={1}>
              <Chip
                label={threatType}
                // variant="outlined"
                color="error"
                size="medium"
                sx={{ height: '2.4rem', fontSize: '1rem' }}
              />
            </Stack>
            <Link
              href={url}
              target="_blank"
              rel="noopener"
              underline="hover"
              style={{ textAlign: 'end' }}
            >
              <span
                style={{
                  width: '200px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  display: 'block',
                }}
              >
                {sourceName}
              </span>
              <span>{datetime}</span>
            </Link>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
