import { FunctionComponent, Fragment } from 'react';
import SearchZone from './Search';
import Styled from 'styled-components';
const SearchContainer = Styled.div`
    padding:70px 0;
`;
const LandingPage: FunctionComponent = () => {
    return (
        <Fragment>
            <SearchContainer>
                <SearchZone />
            </SearchContainer>
        </Fragment>
    );
}

export default LandingPage; 