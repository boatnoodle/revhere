import React, { FunctionComponent, Fragment } from 'react';
import { ReviewItems } from 'containers/landing-page/Components/ReviewItems';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const LandingPage: FunctionComponent = () => {
    return (
        <ReviewItems
            title="Explore Hot Reviews(Test Deploy)"
            subTitle="Find out hot reviews in our systems"
            items={items}
        ></ReviewItems>
    );
};
