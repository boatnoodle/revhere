import React, { FunctionComponent } from 'react';
import { Layouts } from 'components/Layout';
import { LandingPage } from 'containers/landing-page';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const Index: FunctionComponent = () => {
<<<<<<< Updated upstream
    const HELLO = gql`
        query {
            hello
        }
    `;

    // the hook that calls the query.
    const hello = useQuery(HELLO);
    return (
        <Layouts>
            <LandingPage />
        </Layouts>
    );
=======
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
      <LandingPage />
    </Layouts>
  );
>>>>>>> Stashed changes
};
export default Index;
