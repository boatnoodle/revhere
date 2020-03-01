import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import Navbar from './Component/Navbar';
import styled from 'styled-components';

import { Layout, Row, Col } from 'antd';
const { Footer, Content } = Layout;
import { ProvideAuth } from 'components/Authentication';

type LayoutProps = {
  title?: string;
};

const Container = styled.div`
  max-width: 1200px;
  width: calc(100vw - 6rem);
  margin: 0 auto;
  min-height: 100vh;
`;

const StyledLayout = styled(Layout)`
  background-color: white !important;
  & footer {
    text-align: center !important;
  }
`;

export const Layouts: FunctionComponent<LayoutProps> = ({ children, title }) => (
  <ProvideAuth>
    <StyledLayout>
      <Navbar />
      <Content>
        <Container>{children}</Container>
      </Content>
      <Footer>Copyrights © 2020, RevHere</Footer>
    </StyledLayout>
  </ProvideAuth>
);
