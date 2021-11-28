import { Autocomplete, Button, TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { textFieldProps } from '../../../constant/commomProps';
import MakeGrid from '../../CommonLayout/molecules/MakeGrid';
import { DatePicker } from '@mui/lab';
import { optionPosts, optionStatus } from '../../../constant';

function FormSearch() {
  return (
    <MakeGrid
      grids={[
        {
          children: <TextField label="Tác giả" {...textFieldProps} />,
        },
        {
          children: (
            <Autocomplete
              options={optionStatus}
              renderInput={(params) => (
                <TextField {...params} label="Trạng thái" {...textFieldProps} />
              )}
            />
          ),
        },
        {
          children: (
            <Autocomplete
              options={optionPosts}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Loại bài viết"
                  {...textFieldProps}
                />
              )}
            />
          ),
        },
        {
          children: (
            <DatePicker
              value={new Date()}
              onChange={(date) => () => {}}
              label="Từ ngày"
              renderInput={(
                params: JSX.IntrinsicAttributes & TextFieldProps
              ) => <TextField {...params} {...textFieldProps} />}
            />
          ),
        },
        {
          children: (
            <DatePicker
              value={new Date()}
              onChange={(date) => () => {}}
              label="Đến ngày"
              renderInput={(
                params: JSX.IntrinsicAttributes & TextFieldProps
              ) => <TextField {...params} {...textFieldProps} />}
            />
          ),
        },
        {
          children: (
            <Button variant="contained" color="primary">
              Tìm kiếm
            </Button>
          ),
          gridProps: { xs: 'auto' },
        },
        {
          children: (
            <Button variant="contained" color="inherit">
              Đặt lại
            </Button>
          ),
          gridProps: { xs: 'auto' },
        },
      ]}
      itemProps={{ xs: 12, sm: 6, md: 3 }}
    />
  );
}

export default FormSearch;
