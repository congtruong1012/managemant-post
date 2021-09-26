import React, { useEffect } from 'react';
import { postApi } from '../../../api/postApi';

interface Props {}

export const Posts = (props: Props) => {
  useEffect(() => {
    (async () => {
      const res = await postApi.getAll({
        _limit: 10,
        _page: 1,
      });
      console.log(res.data);
    })();
  });
  return <div>Post</div>;
};
