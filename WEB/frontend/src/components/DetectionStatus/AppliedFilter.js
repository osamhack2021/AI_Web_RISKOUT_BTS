import { Chip, Grid } from '@mui/material';

import { useRecoilValue } from 'recoil';
import {
  appliedFilterMapState,
  useAppliedFilterMapActions,
} from '../../atoms/appliedFilterMapState';

export default function AppliedFilter() {
  const appliedFilterMap = useRecoilValue(appliedFilterMapState);
  const { remove } = useAppliedFilterMapActions();

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'start',
        flexWrap: 'wrap',
        listStyle: 'none',
        m: 0,
      }}
      spacing={1}
    >
      {appliedFilterMap &&
        Object.entries(appliedFilterMap).map(([label, words], id) => {
          return (
            <>
              {words.map((word, id) => (
                <Grid item>
                  <Chip
                    key={id}
                    sx={{ borderRadius: '5px' }}
                    label={word}
                    onDelete={() => remove(label, word)}
                  />
                </Grid>
              ))}
            </>
          );
        })}
    </Grid>
  );
}
