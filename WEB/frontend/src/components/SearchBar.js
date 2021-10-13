import { useRecoilValue, useSetRecoilState } from 'recoil';
import { autoCompleteFilterState } from '../atoms/searchState';
import {
  appliedFilterMapState,
  appliedAutoCompleteFilterState,
} from '../atoms/appliedFilterMapState';

import { Autocomplete, Chip, TextField } from '@mui/material';
// mui icons
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DateRangeIcon from '@mui/icons-material/DateRange';

export function SearchChip(props) {
  const { code } = props;
  if (code === 'PER')
    return <Chip color="primary" icon={<PersonIcon />} {...props} />;
  else if (code === 'ORG')
    return <Chip color="warning" icon={<ApartmentIcon />} {...props} />;
  else if (code === 'LOC')
    return <Chip color="success" icon={<PlaceIcon />} {...props} />;
  else if (code === 'CVL')
    return <Chip color="secondary" icon={<LocalOfferIcon />} {...props} />;
  else if (code === 'DAT' || code === 'TIM')
    return <Chip icon={<DateRangeIcon />} {...props} />;
  else return <Chip {...props} />;
}

export default function SearchBar({ setValue }) {
  const setAppliedFilterMap = useSetRecoilState(appliedFilterMapState);
  const autoCompleteFilter = useRecoilValue(autoCompleteFilterState);
  const appliedAutoCompleteFilter = useRecoilValue(
    appliedAutoCompleteFilterState
  );

  const onTagsChange = (event, values) => {
    let format = {};
    let lst = values[values.length - 1];
    if (typeof lst === 'string' || lst instanceof String)
      // label search_text to ETC.. (구현 시간이 없어서 로직이 맘대로인 점 죄송합니다.)
      values[values.length - 1] = { word: lst, label: 'ETC' };

    for (let { word, label } of values) {
      if (!format[label]) format[label] = [word];
      else if (!format[label].includes(word)) format[label].push(word);
    }
    console.log(values);
    setAppliedFilterMap(format);
    setValue('search', values);
  };

  return (
    <Autocomplete
      multiple
      freeSolo
      mt={2}
      value={appliedAutoCompleteFilter}
      options={autoCompleteFilter}
      getOptionLabel={(option) => option.word}
      getOptionSelected={(option, value) => option == value}
      onChange={onTagsChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label=""
          placeholder="Search"
          margin="normal"
          fullWidth
        />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <SearchChip
            code={option.label}
            variant="outlined"
            label={`${option.word}`}
            {...getTagProps({ index })}
          />
        ))
      }
    />
  );
}
