import React, { FunctionComponent, useEffect } from 'react';

import { Layouts } from 'components/Layout';
import { LandingPage } from 'containers/landing-page';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { withApollo } from 'providers/web-client/with-apollo-client';

const Index: FunctionComponent = () => {
  const USERS = gql`
    query {
      users {
        name
      }
    }
  `;

  // the hook that calls the query.
  const { data, loading, error } = useQuery(USERS);
  return (
    <Layouts>
      <div>Deploy from circleci for yossaporn (Co-founder)!!!</div>
      <LandingPage />
    </Layouts>
  );
};
export default withApollo(Index, { ssr: true });
