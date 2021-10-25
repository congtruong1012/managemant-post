import React from 'react';
import PageMainTemplate from '../../CommonLayout/templates/PageMainTemplate';
import FormSearch from './FormSearch';

interface Props {}

export const Posts = (props: Props) => {
  return (
    <PageMainTemplate title="Posts">
      <FormSearch />
    </PageMainTemplate>
  );
};
