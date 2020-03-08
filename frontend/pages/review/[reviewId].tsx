import React, { FunctionComponent } from 'react';

import { useRouter } from 'next/router';
import { withApollo } from 'providers/web-client/with-apollo-client';
import { Layouts } from 'components/Layout';
import { Review } from 'containers/review';

const ReviewDetailPage: FunctionComponent = () => {
  const router = useRouter();
  const { reviewId } = router.query;
  return (
    <Layouts>
      <Review reviewId={reviewId} />
    </Layouts>
  );
};

export default withApollo(ReviewDetailPage, { ssr: true });
