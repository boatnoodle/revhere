import React, { FunctionComponent, Fragment } from 'react';
import BasicGrid from 'components/Standard-grid';
import SideBar from 'containers/review-detail/components/sidebar';
import Content from './components/cover';

const ReviewLists: FunctionComponent = () => {
  return (
    <Fragment>
      <BasicGrid left={<Content />} content={<SideBar />} />
    </Fragment>
  );
};
export default ReviewLists;
