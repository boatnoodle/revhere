import React, { FunctionComponent, Fragment } from 'react';
import { ReviewItems } from 'containers/landing-page/Components/ReviewItems';
import { Row, Col } from 'antd';
import { TabPaneComponent } from './Components/TabPaneComponent';
import { ListComponent } from './Components/List';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const LandingPage: FunctionComponent = () => {
  return (
    <Fragment>
      <ReviewItems title="สำหรับคุณ" items={items}></ReviewItems>
      <Row gutter={[16, 16]}>
        <Col span={7} push={17}>
          <ListComponent />
        </Col>
        <Col span={17} pull={7}>
          <TabPaneComponent />
        </Col>
      </Row>
    </Fragment>
  );
};
