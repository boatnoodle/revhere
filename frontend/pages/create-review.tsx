import React from 'react';

import { NextPage } from 'next';
import { Layouts } from 'components/Layout';
import { withApollo } from 'providers/web-client/with-apollo-client';
import { CreateReview } from 'containers/create-review';
import { auth } from 'utils/auth';

const Page: NextPage = () => {
  return (
    <Layouts>
      <CreateReview />
    </Layouts>
  );
};

Page.getInitialProps = async ctx => {
  auth(ctx);
};

export default withApollo(Page, { ssr: false });
