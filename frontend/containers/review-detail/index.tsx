import React, { FunctionComponent, Fragment } from 'react';
import BasicGrid from 'components/Standard-grid';
import SideBar from './components/sidebar';
import Content from './components/content';

import { Cover } from './components/cover';

export const ReviewDetail: FunctionComponent = () => {
  return (
    <Fragment>
      <Cover title="สำหรับคุณ" />
      <BasicGrid left={<Content />} content={<SideBar />} />
    </Fragment>
  );
};
