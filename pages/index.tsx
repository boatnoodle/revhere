import React, { FunctionComponent } from 'react';
import { Layouts } from 'components/Layout';
import { LandingPage } from 'containers/landing-page';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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
            <LandingPage />
        </Layouts>
    );
};
export default Index;
