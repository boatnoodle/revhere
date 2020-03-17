import React from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layouts } from 'components/Layout';
import { withApollo } from 'providers/web-client/with-apollo-client';
import { UpdateReview } from 'containers/update-review';
import { auth } from 'utils/auth';

const Page: NextPage = () => {
  const router = useRouter();
  const { reviewId } = router.query;
  return (
    <Layouts>
      <UpdateReview reviewId={reviewId} />
    </Layouts>
  );
};

Page.getInitialProps = async ctx => {
  auth(ctx);
};

export default withApollo(Page, { ssr: true });
