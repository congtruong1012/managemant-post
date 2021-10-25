import React, { useState } from 'react';
import { DatePicker as DatePickerInput, DatePickerProps } from '@mui/lab';
import TextField from '../TextField';

function DatePicker(props: Omit<DatePickerProps, 'value' | 'onChange'>) {
  const [value, setValue] = useState<Date | null>(null);

  const handleChange = (date: Date | null) => setValue(date);

  return (
    <DatePickerInput
      value={value}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}

export default DatePicker;
