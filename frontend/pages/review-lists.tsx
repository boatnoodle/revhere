import React, { FunctionComponent } from 'react';
import { withApollo } from 'providers/web-client/with-apollo-client';
import { Layouts } from 'components/Layout';
import ReviewLists from 'containers/review-lists';

const ReviewList: FunctionComponent = () => {
  return (
    <Layouts>
      <ReviewLists />
    </Layouts>
  );
};

export default withApollo(ReviewList, { ssr: true });
