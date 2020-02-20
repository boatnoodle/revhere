import React, { FunctionComponent, Fragment } from 'react';
import { ReviewItems } from 'containers/landing-page/Components/ReviewItems';
import { Row, Col } from 'antd';
import { TabPaneComponent } from './Components/TabPaneComponent';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const LandingPage: FunctionComponent = () => {
  return (
    <Fragment>
      <ReviewItems title="สำหรับคุณ" items={items}></ReviewItems>
      <Row>
        <Col span={7} push={17}>
          col-18 col-push-6
        </Col>
        <Col span={17} pull={7}>
          <TabPaneComponent></TabPaneComponent>
        </Col>
      </Row>
    </Fragment>
  );
};
