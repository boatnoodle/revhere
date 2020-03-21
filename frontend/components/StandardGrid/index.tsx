import React, { FunctionComponent } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
interface Props {
  right: JSX.Element;
  left: JSX.Element;
}
const RowStyled = styled(Row)`
  margin-top: 10px !important;
`;
export const StandardGrid: FunctionComponent<Props> = ({ right, left }) => {
  return (
    <RowStyled gutter={[16, 16]}>
      <Col span={7} push={17}>
        {right}
      </Col>
      <Col span={17} pull={7}>
        {left}
      </Col>
    </RowStyled>
  );
};
