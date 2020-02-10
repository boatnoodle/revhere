import React from "react";
import { Form, Icon, Input, Button } from "antd";

import Layout from "../components/Layout/Layout";

const Index: React.FunctionComponent = () => {
  const handleSubmit = () => {};

  return (
    <Layout title="Home">
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>

      <h1>
        Review here is coming soon. 👋 From Yosssaporn (Co-Founder) And Nattasit
        (Co-Founder)
      </h1>
      <img src="/logo.png" />
    </Layout>
  );
};
export default Index;
