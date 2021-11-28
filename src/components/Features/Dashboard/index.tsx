import {
  Box,
  Card,
  Typography,
  CardHeader,
  TableCellProps,
  Tabs,
  Tab,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getDashboard, getOverview } from '../../../action';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { Post } from '../../../model';
import MakeGrid from '../../CommonLayout/molecules/MakeGrid';
import Section from '../../CommonLayout/molecules/Section';
import DataTable from '../../CommonLayout/molecules/Table';
import TypographyLineClamp from '../../CommonLayout/atom/TypographyLineCamp';
import _format from 'date-fns/format';
import PageMainTemplate from '../../CommonLayout/templates/PageMainTemplate';

interface Props {}

const column = (label: string) => {
  return [
    {
      id: 'c1',
      label: <b>ID</b>,
      props: {
        width: '10%',
      } as TableCellProps,
    },
    {
      id: 'c2',
      label: <b>Nội dung</b>,
      props: {
        width: '50%',
      } as TableCellProps,
      format: (value: string) => (
        <TypographyLineClamp line={2}>{value}</TypographyLineClamp>
      ),
    },
    {
      id: 'c3',
      props: {
        width: '15%',
      } as TableCellProps,
      label: <b>Tác giả</b>,
    },
    {
      id: 'c4',
      label: <b>{label}</b>,
      props: {
        align: 'right',
        width: '20%',
      } as TableCellProps,
    },
  ];
};

function createData(c1: number, c2: string, c3: number, c4: string | number) {
  return { c1, c2, c3, c4 };
}

export const Dashboard = (props: Props) => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.post);
  const { dashboard, overview } = selector;

  const [tabActive, setTabActive] = useState(0);

  const handleChangeTab = (e: object, newValue: number) => {
    if (newValue !== tabActive) {
      setTabActive(newValue);
    }
  };

  useEffect(() => {
    dispatch(getDashboard());
    dispatch(getOverview());
  }, []);

  const formatDashboard = Object.entries(dashboard).map(([key, value]) => {
    type ETotal = {
      [key: string]: string;
    };
    const eTotal: ETotal = {
      post: 'error.main',
      like: 'success.main',
      comment: 'primary.main',
      share: 'warning.main',
    };
    return {
      label: `Tổng số bài ${key}`,
      value: value as number,
      color: eTotal[key],
    };
  });

  const formatOverview = Object.entries(overview).map(([key, arr]) => {
    type EShow = {
      [key: string]: {
        title: string;
        label: string;
        value: keyof Post;
      };
    };
    const eShow: EShow = {
      newest: {
        title: 'Top 10 bài mới nhất',
        label: 'Ngày đăng',
        value: 'createdAt',
      },
      mostLikes: {
        title: 'Top 10 bài có nhiều lượt like nhất',
        label: 'Lượt like',
        value: 'like',
      },
      mostComments: {
        title: 'Top 10 bài có nhiều lượt comment nhất',
        label: 'Lượt comment',
        value: 'comment',
      },
      mostShares: {
        title: 'Top 10 bài có nhiều lượt share nhất',
        label: 'Lượt share',
        value: 'share',
      },
    };
    const { title, label, value } = eShow[key];
    return {
      title,
      label,
      data: arr.map((item) =>
        createData(
          item.id,
          item.description,
          item.author,
          value !== 'createdAt'
            ? item[value]
            : _format(new Date(item[value]), 'dd/MM/yyy HH:mm')
        )
      ),
    };
  });

  return (
    <PageMainTemplate title="Dashboard">
      <MakeGrid
        grids={formatDashboard.map((item, index) => ({
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
                <Typography gutterBottom>{item?.label}</Typography>
                <Typography variant="h5">{item?.value}</Typography>
              </Box>
            </Box>
          ),
          gridProps: { md: 3, sm: 6, xs: 12 },
        }))}
      />
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabActive}
          onChange={handleChangeTab}
          aria-label="basic tabs example"
        >
          {formatOverview.map((item, index) => (
            <Tab
              label={item.label}
              key={String(index)}
              sx={{ textTransform: 'none', fontWeight: 600 }}
            />
          ))}
        </Tabs>
        {formatOverview.map((item, index) => (
          <div
            key={String(index)}
            role="tabpanel"
            hidden={tabActive !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
          >
            {tabActive === index && (
              <Box sx={{ p: 3 }}>
                <Card variant="outlined" elevation={0}>
                  <CardHeader
                    title={item.title}
                    titleTypographyProps={{
                      variant: 'body1',
                      color: '#fff',
                    }}
                    component={Box}
                    bgcolor="info.main"
                  />
                  <DataTable
                    column={column(item.label)}
                    rows={item.data}
                    tableProps={{
                      sx: { minWidth: 500 },
                    }}
                  />
                </Card>
              </Box>
            )}
          </div>
        ))}
      </Box>
    </PageMainTemplate>
  );
};
