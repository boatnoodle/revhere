import { FunctionComponent, Fragment } from 'react';
import SearchZone from './Components/Search';
import { ReviewItems } from './Components/ReviewItems';
import Styled from 'styled-components';
const SearchContainer = Styled.div`
    padding:100px 0;
    background-image: url(review-banner.jpg);
    background-size: cover;
    background-position-y: 40%;
    color:white;
`;

let items = [];

export const LandingPage: FunctionComponent = () => {
    return (
        <Fragment>
            <SearchContainer>
                <SearchZone />
            </SearchContainer>
            <ReviewItems title='Explore Hot Reviews' subTitle='Find out hot reviews in our systems' items={items}></ReviewItems>
        </Fragment>
    );
}
