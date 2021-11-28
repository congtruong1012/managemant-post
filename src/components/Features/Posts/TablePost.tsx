import {
  Backdrop,
  CircularProgress,
  Pagination,
  Box,
  TableCellProps,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getPosts } from '../../../action';
import { userApi } from '../../../api/userApi';
import { optionPosts, optionStatus } from '../../../constant';
import { useAppDispatch, useAppSelector } from '../../../hook';
import TypographyLineClamp from '../../CommonLayout/atom/TypographyLineCamp';
import Section from '../../CommonLayout/molecules/Section';
import DataTable from '../../CommonLayout/molecules/Table';

interface Interact {
  like: number;
  share: number;
  comment: number;
}

const status = {
  W: 'warning',
  A: 'success',
  C: 'error',
};

function TablePost() {
  const [author, setAuthor] = useState({
    isLoadingAuthor: true,
    data: {} as { [key: number]: string },
  });
  const selector = useAppSelector((state) => state.post);
  const { isLoadingPost, posts, params, pagination } = selector;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getPosts({
        _limit: 10,
        _page: 1,
      })
    );
  }, []);
  useEffect(() => {
    (async () => {
      const res = await userApi.getAll();
      const authors = res.data.reduce((obj, item) => {
        return { ...obj, [item.id]: item.fullName };
      }, {});
      setAuthor({ ...author, isLoadingAuthor: false, data: authors });
    })();
  }, []);
  const handleChangePage = (e: React.ChangeEvent<unknown>, page: number) => {
    dispatch(
      getPosts({
        _limit: 10,
        _page: page,
      })
    );
  };
  const getLabel = (
    arr: Array<{ label: string; value: string | number }>,
    value: string | number
  ) => {
    const selected = arr.find((item) => item.value === value);
    return selected ? selected.label : '';
  };
  const column = [
    {
      id: 'c1',
      label: <b>ID</b>,
    },
    {
      id: 'c2',
      label: <b>Nội dung</b>,
      props: {
        width: '30%',
      } as TableCellProps,
      format: (value: string) => (
        <TypographyLineClamp line={3}>{value}</TypographyLineClamp>
      ),
    },
    {
      id: 'c3',
      label: <b>Tác giả</b>,
      format: (value: number) => <div>{author.data[value] || ''}</div>,
    },
    {
      id: 'c4',
      label: <b>Tương tác</b>,
      format: (value: Interact) => (
        <>
          <div>Lượt thích: {value.like}</div>
          <div>Lượt chia sẻ: {value.share}</div>
          <div>Lượt bình luận: {value.comment}</div>
        </>
      ),
    },
    {
      id: 'c5',
      label: <b>Loại bài viết</b>,
    },
    {
      id: 'c6',
      label: <b>Trạng thái</b>,
      props: {
        align: 'right',
        width: '15%',
      } as TableCellProps,
      format: (value: 'W' | 'A' | 'C') => (
        <Box color={`${status[value]}.main`} fontWeight={700}>
          {getLabel(optionStatus, value)}
        </Box>
      ),
    },
  ];

  function createData(
    c1: number,
    c2: string,
    c3: number,
    c4: Interact,
    c5: string,
    c6: 'W' | 'A' | 'C'
  ) {
    return { c1, c2, c3, c4, c5, c6 };
  }

  const rows = posts.map((item) =>
    createData(
      item.id,
      item.description,
      item.author,
      {
        like: item.like,
        share: item.share,
        comment: item.comment,
      },
      getLabel(optionPosts, item.type),
      item.approved
    )
  );
  return isLoadingPost && posts.length === 0 && author.isLoadingAuthor ? (
    <div>Loading</div>
  ) : (
    <Section>
      {posts.length > 0 && <DataTable column={column} rows={rows} />}
      {posts.length > 0 && isLoadingPost && (
        <Backdrop
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={posts.length > 0 && isLoadingPost}
        >
          <CircularProgress color="primary" />
        </Backdrop>
      )}
      <Box display="flex" justifyContent="center">
        <Pagination
          count={pagination._totalPage || 1}
          page={pagination._page}
          color="primary"
          onChange={handleChangePage}
          showFirstButton
          showLastButton
        />
      </Box>
    </Section>
  );
}

export default TablePost;
