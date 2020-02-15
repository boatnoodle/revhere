<<<<<<< HEAD
import { FunctionComponent, Fragment } from "react";
import { ReviewItems } from "containers/landing-page/Components/ReviewItems";
=======

import { FunctionComponent, Fragment } from 'react';
import { ReviewItems } from 'containers/landing-page/Components/ReviewItems';
>>>>>>> 915881b11e5ffac1fb9d410c024f1637e88d3a05

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const LandingPage: FunctionComponent = () => {
<<<<<<< HEAD
  console.log("This shows errors");
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
=======
    return (
        <ReviewItems title='Explore Hot Reviews' subTitle='Find out hot reviews in our systems' items={items}></ReviewItems>
    );
}

>>>>>>> 915881b11e5ffac1fb9d410c024f1637e88d3a05
