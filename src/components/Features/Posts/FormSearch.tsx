import React from 'react';
import Autocomplete from '../../CommonLayout/atom/Autocomplete';
import DatePicker from '../../CommonLayout/atom/DatePicker';
import TextField from '../../CommonLayout/atom/TextField';
import MakeGrid from '../../CommonLayout/molecules/MakeGrid';

function FormSearch() {
  const optionStatus = [
    { label: 'Đã duyệt', value: 'A' },
    { label: 'Chưa duyệt', value: 'W' },
    { label: 'Đã huỷ', value: 'C' },
  ];
  const optionPosts = [
    { label: 'Bài viết thường', value: 0 },
    { label: 'Bài trải nghiêm', value: 1 },
    { label: 'Bài viết liên kết', value: 2 },
  ];
  return (
    <MakeGrid
      grids={[
        {
          children: (
            <TextField
              label="Tác giả"
              variant="outlined"
              fullWidth
              size="small"
              // {...register('username')}
              // error={!!errors?.username}
              // helperText={errors?.username?.message || ''}
            />
          ),
        },
        {
          children: <Autocomplete options={optionStatus} label="Trạng thái" />,
        },
        {
          children: (
            <Autocomplete options={optionPosts} label="Loại bài viết" />
          ),
        },
        // {
        //   children: <DatePicker label="Từ ngày" />,
        // },
        // {
        //   children: <DatePicker label="Đến ngày" />,
        // },
      ]}
      itemProps={{ xs: 12, sm: 6, md: 3 }}
    />
  );
}

export default FormSearch;
