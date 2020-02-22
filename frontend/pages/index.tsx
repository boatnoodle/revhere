import React, { FunctionComponent, useEffect } from 'react';

import { Layouts } from 'components/Layout';
import { LandingPage } from 'containers/landing-page';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { withApollo } from 'providers/web-client/with-apollo-client';

const Index: FunctionComponent = () => {
  const USERS = gql`
    mutation {
      createOrUpdateUser {
        name
      }
    }
  `;
  const [createOrUpdateUser, { data, loading, error }] = useMutation(USERS);
  useEffect(() => {
    console.log(createOrUpdateUser());
  }, []);
  // the hook that calls the query.
  return (
    <Layouts>
      <LandingPage />
    </Layouts>
  );
};
export default withApollo(Index, { ssr: true });
