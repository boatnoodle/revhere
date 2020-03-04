import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import BreadCrumb from 'components/ฺBreadcrumb';

import ContentLoader from 'react-content-loader';
import { Form as FormAnt, Button, Row, Col, Alert } from 'antd';
import { Formik, Field } from 'formik';
import { Editor } from './Components/editor';
import { GET_REVIEW, UPDATE_REVIEW_DETAIL } from './graphql';
import { useQuery, useMutation } from '@apollo/react-hooks';

const Container = styled.div`
  width: 1000px;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.06);
  margin: 15px auto;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  background-color: #17bf63;
  border-color: #17bf63;
  color: white;
  & :hover {
    color: #17bf63 !important;
    background-color: white !important;
    border-color: #17bf63 !important;
  }
`;
const FormItem = styled(FormAnt.Item)`
  & :first-child {
    margin-bottom: 0 !important;
  }
`;

type Props = {
  reviewId: {};
};

export const CreateReviewDetail: FunctionComponent<Props> = ({ reviewId }) => {
  const { data, loading, error } = useQuery(GET_REVIEW, { variables: { _id: reviewId } });
  const [updateReviewDetail] = useMutation(UPDATE_REVIEW_DETAIL);
  const [visible, setVisible] = useState(false);

  const initialValues = {
    body: '',
  };

  const onSubmit = async ({ body }) => {
    await updateReviewDetail({ variables: { _id: reviewId, body } });
    setVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return (
      <Fragment>
        <BreadCrumb />
        <Container>
          <ContentLoader
            speed={2}
            width={1000}
            height={500}
            viewBox="0 0 1200 800"
            backgroundColor="#ffffff"
            foregroundColor="#ecebeb"
          >
            <rect x="64" y="81" rx="0" ry="0" width="194" height="26" />
            <rect x="65" y="133" rx="0" ry="0" width="824" height="24" />
            <rect x="64" y="175" rx="0" ry="0" width="158" height="26" />
            <rect x="194" y="190" rx="0" ry="0" width="1" height="6" />
            <rect x="64" y="256" rx="0" ry="0" width="1000" height="550" />
          </ContentLoader>
        </Container>
      </Fragment>
    );
  }

  return (
    <Fragment>
      {visible && <Alert message="บันทึกรีวิวสำเร็จ" type="success" banner closable afterClose={handleClose} />}
      <BreadCrumb />
      <Container>
        <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit, errors }) => {
            return (
              <FormAnt onFinish={handleSubmit} layout="vertical">
                <h1>เขียนรีวิว</h1>
                <Row gutter={16}>
                  <Col className="gutter-row">
                    <FormItem label="รูปภาพปก">
                      <img src={data?.review?.imageCover} alt="imageCover" width="200" />
                    </FormItem>
                  </Col>
                  <Col className="gutter-row" flex="auto">
                    <FormItem label="หัวข้อรีวิว">
                      <span>{data?.review?.titleReview}</span>
                    </FormItem>
                    <FormItem label="หัวข้อเกริ่นนำ">
                      <span>{data?.review?.introReview}</span>
                    </FormItem>
                  </Col>
                </Row>
                <FormItem style={{ marginTop: '20px' }}>
                  <StyledButton htmlType="submit">บันทึกรีวิว</StyledButton>
                </FormItem>
                <FormItem>
                  <Field name="body">
                    {({ field, form: { setFieldValue } }) => {
                      return <Editor {...field} setFieldValue={setFieldValue} body={data?.review?.body} />;
                    }}
                  </Field>
                </FormItem>
                <FormItem style={{ marginTop: '20px' }}>
                  <StyledButton htmlType="submit">บันทึกรีวิว</StyledButton>
                </FormItem>
              </FormAnt>
            );
          }}
        </Formik>
      </Container>
    </Fragment>
  );
};
