import React, { FunctionComponent } from 'react';
import { Layouts } from 'components/Layout';
import { withApollo } from 'providers/web-client/with-apollo-client';
import { CreateReview } from 'containers/create-review';

const page: FunctionComponent = () => {
  return (
    <Layouts>
      <CreateReview />
    </Layouts>
  );
};

export default withApollo(page, { ssr: true });
