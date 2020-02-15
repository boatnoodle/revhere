import React, { FunctionComponent } from 'react';
import { Layouts } from 'components/Layout';
import { LandingPage } from 'containers/landing-page';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const Index: FunctionComponent = () => {
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
};
export default Index;
