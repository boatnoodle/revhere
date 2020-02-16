import React, { FunctionComponent } from 'react';
import { Layouts } from '../components/Layout';
import { withApollo } from 'providers/web-client/with-apollo-client';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const About: FunctionComponent = () => {
  return (
    <div>
      <Layouts>
        <div>About page is here.</div>
      </Layouts>
    </div>
  );
};

export default withApollo(About, { ssr: true });
