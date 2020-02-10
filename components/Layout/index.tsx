import { FunctionComponent } from "react";
import Head from "next/head";
import Navbar from './Navbar';
import { Layout } from 'antd';
type LayoutProps = {
  title?: string;
};
const { Header, Footer, Content } = Layout;
const Layouts: FunctionComponent<LayoutProps> = ({ children, title }) => (
  <Layout>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>
      <Navbar />
    </Header>
    <Content>
      {children}
    </Content>
    <Footer></Footer>
  </Layout>
);
export default Layouts;
