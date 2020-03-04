/* eslint-disable react/display-name */
import React, { FunctionComponent } from 'react';

import { useRouter } from 'next/router';
import { Layouts } from 'components/Layout';
import { withApollo } from 'providers/web-client/with-apollo-client';
import { CreateReviewDetail } from 'containers/create-review-detail';

const page: FunctionComponent = () => {
  const router = useRouter();
  const { reviewId } = router.query;
  return (
    <Layouts>
      <CreateReviewDetail reviewId={reviewId} />
    </Layouts>
  );
};

export default withApollo(page, { ssr: false });
