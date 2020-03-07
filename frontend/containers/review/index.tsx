import React, { FunctionComponent, Fragment } from 'react';
import BasicGrid from 'components/Standard-grid';
import styled from 'styled-components';

import { useQuery } from '@apollo/react-hooks';
import { SideBar } from 'components/Sidebar';
import { ReviewContent } from './components/ReviewContent';
import { ReviewCover } from './components/ReviewCover';
import { GET_REVIEW } from './graphql';

interface Props {
  reviewId: {};
}
const Title = styled.div`
  font-size: 1.5em;
  font-weight: 500px;
`;

export const Review: FunctionComponent<Props> = ({ reviewId }) => {
  const { data, loading, error } = useQuery(GET_REVIEW, { variables: { _id: reviewId } });

  if (loading) {
    return <div>loading</div>;
  }

  if (!data?.review) {
    return <div>ไม่พบรีวิว</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Fragment>
      <Title>สำหรับคุณ</Title>
      <ReviewCover imageCover={data?.review?.imageCover} />
      <BasicGrid left={<ReviewContent data={data} />} content={<SideBar />} />
    </Fragment>
  );
};
