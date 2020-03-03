import React, { FunctionComponent, Fragment } from 'react';
import { ReviewItems } from 'containers/landing-page/Components/ReviewItems';
import { TabPaneComponent } from './Components/TabPaneComponent';
import { ListComponent } from './Components/List';
import StandardGrid from 'components/Standard-grid';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const LandingPage: FunctionComponent = () => {
  return (
    <Fragment>
      <ReviewItems title="สำหรับคุณ" items={items}></ReviewItems>
      <StandardGrid content={<ListComponent />} left={<TabPaneComponent />} />>
    </Fragment>
  );
};
