import React, { FunctionComponent, Fragment } from 'react';
import ContentLoader from 'react-content-loader';
import BasicGrid from 'components/Standard-grid';

import { useQuery } from '@apollo/react-hooks';
import { GET_MY_REVIEW } from './graphql';
import { SideBar } from 'components/Sidebar';
import { ReviewListMain } from './components/ReviewListMain';

export const ReviewLists: FunctionComponent = () => {
  const { data, loading, error } = useQuery(GET_MY_REVIEW);

  const MyLoader = () => (
    <ContentLoader
      speed={2}
      width={1200}
      height={500}
      viewBox="0 0 1200 500"
      backgroundColor="#e6e6e6"
      foregroundColor="#bfbfbf"
    >
      <circle cx="28" cy="130" r="21" />
      <rect x="66" y="117" rx="5" ry="5" width="566" height="25" />
      <circle cx="28" cy="207" r="21" />
      <rect x="66" y="193" rx="5" ry="5" width="566" height="25" />
      <circle cx="28" cy="284" r="21" />
      <rect x="66" y="270" rx="5" ry="5" width="566" height="25" />
      <circle cx="28" cy="360" r="21" />
      <rect x="66" y="349" rx="5" ry="5" width="566" height="25" />
      <rect x="11" y="21" rx="5" ry="5" width="300" height="25" />
    </ContentLoader>
  );

  if (loading) {
    return <MyLoader />;
  }

  return (
    <Fragment>
      <BasicGrid left={<ReviewListMain data={data} />} content={<SideBar />} />
    </Fragment>
  );
};
