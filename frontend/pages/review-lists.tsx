import React from 'react';

import { NextPage } from 'next';
import { withApollo } from 'providers/web-client/with-apollo-client';
import { Layouts } from 'components/Layout';
import { ReviewLists } from 'containers/review-lists';
import { auth } from 'utils/auth';

const ReviewList: NextPage = () => {
  return (
    <Layouts>
      <ReviewLists />
    </Layouts>
  );
};

ReviewList.getInitialProps = async ctx => {
  auth(ctx);
};

export default withApollo(ReviewList, { ssr: false });
