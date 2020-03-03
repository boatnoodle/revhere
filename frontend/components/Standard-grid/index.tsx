import React, { FunctionComponent } from 'react';
import { Row, Col } from 'antd';
interface Props {
  content: JSX.Element;
  left: JSX.Element;
}
const Grid: FunctionComponent<Props> = ({ content, left }) => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={7} push={17}>
        {content}
      </Col>
      <Col span={17} pull={7}>
        {left}
      </Col>
    </Row>
  );
};
export default Grid;
