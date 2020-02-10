import { FunctionComponent } from "react";
import Layout from "../components/Layout";
import LandingPage from '../containers/landing-page';
import { worker } from "cluster";
const Index: FunctionComponent = () => {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
};
export default Index;
