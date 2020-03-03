import React, { FunctionComponent, Fragment } from 'react';
import { Cover } from './components/cover';
import BasicGrid from 'components/Standard-grid';
import SideBar from './components/sidebar';
import Content from './components/content';

export const ReviewDetail: FunctionComponent = () => {
  return (
    <Fragment>
      <Cover title="สำหรับคุณ" />
      <BasicGrid content={<Content />} left={<SideBar />}></BasicGrid>
    </Fragment>
  );
};
