import React from 'react';
import {
  Autocomplete as Select,
  AutocompleteProps,
  TextFieldProps,
} from '@mui/material';
import TextField from '../TextField';

interface Option {
  label: string;
  value: string | number;
  [key: string]: string | number;
}

interface Props {
  options: Array<Option>;
  label: string;
  autoCompleteProps?: AutocompleteProps<Option, false, false, false>;
  textFieldprops?: TextFieldProps;
}

function Autocomplete(props: Props) {
  const { options, label, autoCompleteProps, textFieldprops } = props;
  return (
    <Select
      {...autoCompleteProps}
      options={options}
      getOptionLabel={(option: Option) => option.label}
      renderInput={(params) => (
        <TextField {...params} label={label} {...textFieldprops} size="small" />
      )}
    />
  );
}

export default Autocomplete;
