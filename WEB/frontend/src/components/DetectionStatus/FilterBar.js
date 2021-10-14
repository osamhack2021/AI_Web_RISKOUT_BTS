import { useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Stack,
  Chip,
} from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/styles';
import FilterCheckbox from './FilterCheckbox';

import { useAppliedFilterMapActions } from '../../atoms/appliedFilterMapState';
import { useFilterTags } from '../../atoms/searchState';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function FilterBar() {
  const filterTags = useFilterTags();
  const { reset, includes } = useAppliedFilterMapActions();

  return (
    <Card sx={{ right: 0 }} elevation={1} spacing={3}>
      <CardHeader
        sx={{ background: '#2d333b' }}
        action={
          <Button
            onClick={() => reset()}
            style={{
              fontSize: '11px',
              fontWeight: '800',
              fontFamily: 'Noto sans KR',
              marginTop: '-10px',
              marginRight: '-8x',
              marginBottom: '-28px',
            }}
            size="small"
          >
            RESET
          </Button>
        }
        titleTypographyProps={{
          variant: 'body1',
          fontSize: '1.5rem',
          fontFamily: 'Noto sans KR',
          fontWeight: 600,
          lineHeight: '1.9em',
        }}
        title="FILTERS"
      />
      <Divider />

      {filterTags &&
        Object.entries(filterTags).map(
          ([label, wordCount], id) =>
            Object.keys(wordCount).length > 0 && (
              <Accordion key={id}>
                <AccordionSummary>
                  <Stack
                    sx={{ width: '100%' }}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box>글에서 찾은 {labelToKorMap[label]}</Box>
                    <Chip size="small" label={Object.keys(wordCount).length} />
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
              </Accordion>
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
