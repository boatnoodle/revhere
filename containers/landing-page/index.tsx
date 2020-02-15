import React, { FunctionComponent, Fragment } from 'react';
import { ReviewItems } from 'containers/landing-page/Components/ReviewItems';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const LandingPage: FunctionComponent = () => {
    console.log('This shows errors');
    return (
        <Fragment>
            <ReviewItems
                title="Explore Hot Reviews"
                subTitle="Find out hot reviews in our systems"
                items={items}
            ></ReviewItems>
        </Fragment>
    );
};
