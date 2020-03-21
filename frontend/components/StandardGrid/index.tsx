import React, { FunctionComponent } from 'react';
import { Row, Col } from 'antd';
interface Props {
  right: JSX.Element;
  left: JSX.Element;
}
export const StandardGrid: FunctionComponent<Props> = ({ right, left }) => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={7} push={17}>
        {right}
      </Col>
      <Col span={17} pull={7}>
        {left}
      </Col>
    </Row>
  );
};
