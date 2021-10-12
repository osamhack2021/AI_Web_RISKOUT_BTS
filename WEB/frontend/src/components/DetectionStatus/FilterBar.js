import { useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import FilterCheckbox from './FilterCheckbox';

import { useRecoilState, useRecoilValue } from 'recoil';
import {
  appliedFilterMapState,
  useAppliedFilterMapActions,
} from '../../atoms/appliedFilterMapState';
import { useFilterTags } from '../../atoms/searchState';

export default function FilterBar() {
  const filterTags = useFilterTags();
  const { reset, includes } = useAppliedFilterMapActions();

  return (
    <Card
      sx={{ right: 0, marginTop: '38px', minHeight: '100%' }}
      elevation={1}
      spacing={3}
    >
      <CardHeader
        action={
          <Button
            onClick={() => reset()}
            style={{ fontSize: '11px', fontWeight: '800', fontFamily: 'Noto sans KR', marginTop: '-2px', marginRight: '-8px', marginBottom: '-6px' }}
            size="small"
          >
            RESET
          </Button>
        }
        titleTypographyProps={{ variant: 'body1', fontSize: '1.5rem', fontFamily: "Noto sans KR", fontWeight: 600, lineHeight: "1.9em"   }}
        title="FILTER"
      />
      <Divider />

      {filterTags &&
        Object.entries(filterTags).map(
          ([label, wordCount]) =>
            Object.keys(wordCount).length && (
              <CardContent style={{ marginBottom: '16px' }}>
                <Box className="filter_con">
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>글에서 찾은 {labelToKorMap[label]}</Typography>
                    <Typography>{Object.keys(wordCount).length}</Typography>
                  </Stack>
                  <Box>
                    {Object.entries(wordCount)
                      .sort(([, a], [, b]) => b - a)
                      .map(([word, count]) => (
                        <FilterCheckbox
                          label={label}
                          count={count}
                          hashtag={word}
                          key={word}
                          checked={includes(label, word)}
                        />
                      ))}
                  </Box>
                </Box>
              </CardContent>
            )
        )}
    </Card>
  );
}

const labelToKorMap = {
  PER: '인물',
  FLD: '이론',
  AFW: '인공물',
  ORG: '단체',
  LOC: '장소',
  CVL: '문화',
  DAT: '날짜',
  TIM: '시간',
  NUM: '숫자',
  EVN: '사건',
  ANM: '동물',
  PLT: '식물',
  MAT: '물질',
  TRM: '용어',
};
