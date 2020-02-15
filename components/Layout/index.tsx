import { FunctionComponent } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import { Layout, Row, Col } from 'antd';

type LayoutProps = {
  title?: string;
}

const { Footer, Content } = Layout;
console.log('This shows errors');
export const Layouts: FunctionComponent<LayoutProps> = ({
    children,
    title
}) => (
    <Layout>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar />
        <Content>
            <Row>
                <Col>{children}</Col>
            </Row>
        </Content>
        <Footer></Footer>
    </Layout>
);
