import React, { FunctionComponent, Fragment } from 'react';
import { ReviewItems } from 'containers/landing-page/Components/ReviewItems';
import { ContentZone } from 'containers/landing-page/Components/ContentZone';
import { Row, Col } from 'antd';

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
          <ContentZone></ContentZone>
        </Col>
      </Row>
    </Fragment>
  );
};
