import React, { FunctionComponent } from 'react';
import { withApollo } from 'providers/web-client/with-apollo-client';
import { Layouts } from '../components/Layout';
import { ReviewDetail } from '../containers/review-detail';

const ReviewDetailPage: FunctionComponent = () => {
  return (
    <Layouts>
      <ReviewDetail />
    </Layouts>
  );
};

export default withApollo(ReviewDetailPage, { ssr: true });
