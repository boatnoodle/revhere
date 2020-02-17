import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import Navbar from './Component/Navbar';
import { Layout, Row, Col } from 'antd';
import Styled from 'styled-components';
const { Footer, Content } = Layout;
type LayoutProps = {
  title?: string;
};

const StyledLayout = Styled(Layout)`
    background-color:white !important;
    & Footer{
        text-align:center !important;
    }
`;

export const Layouts: FunctionComponent<LayoutProps> = ({ children, title }) => (
  <StyledLayout>
    <Navbar />
    <Content>
      <Row>
        <Col span={19} offset={3}>
          {children}
        </Col>
      </Row>
    </Content>
    <Footer>Copyrights © 2020, RevHere</Footer>
  </StyledLayout>
);
