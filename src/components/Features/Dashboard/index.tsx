import {
  Box,
  Card,
  Typography,
  TableCellProps,
  CardHeader,
} from '@mui/material';
import React from 'react';
import MakeGrid from '../../CommonLayout/MakeGrid';
import Section from '../../CommonLayout/Section';
import DataTable from '../../CommonLayout/Table';

interface Props {}

const arr = [
  {
    label: 'Tổng số bài post',
    value: '500000',
    color: 'error.main',
  },
  {
    label: 'Tổng số lượt like',
    value: '200000',
    color: 'success.main',
  },
  {
    label: 'Tổng số lượt commnent',
    value: '800000',
    color: 'primary.main',
  },
  {
    label: 'Tổng số lượt share',
    value: '1000000',
    color: 'warning.main',
  },
];

const column = [
  {
    id: 'c1',
    label: <b>Cột 1</b>,
  },
  {
    id: 'c2',
    label: <b>Cột 2</b>,
    props: {
      align: 'right',
    } as TableCellProps,
    format: (value: string) => <b>{value}</b>,
  },
];

function createData(c1: string, c2: string) {
  return { c1, c2 };
}

const rows = [createData('dòng 1 cột 1', '1'), createData('dòng 2 cột 1', '2')];

export const Dashboard = (props: Props) => {
  return (
    <Section>
      <MakeGrid
        grids={arr.map((item, index) => ({
          children: (
            <Box
              height={150}
              bgcolor={item.color}
              color="#fff"
              display="flex"
              justifyContent="center"
              alignItems="center"
              component="div"
              key={String(index)}
            >
              <Box textAlign="center">
                <Typography gutterBottom>{item.label}</Typography>
                <Typography variant="h5">{item.value}</Typography>
              </Box>
            </Box>
          ),
          gridProps: { md: 3, sm: 6, xs: 12 },
        }))}
      />
      <MakeGrid
        grids={arr.map((item, index) => ({
          children: (
            <Card variant="outlined" elevation={0}>
              <CardHeader
                title="Bảng điểm số"
                titleTypographyProps={{
                  variant: 'body1',
                  color: '#fff',
                }}
                component={Box}
                bgcolor="info.main"
              />
              <DataTable column={column} rows={rows} />
            </Card>
          ),
          gridProps: { sm: 6, xs: 12 },
        }))}
      />
    </Section>
  );
};
