import React, { FunctionComponent, Fragment } from 'react';
import styled from 'styled-components';
import BreadCrumb from 'components/ฺBreadcrumb';

import { EditOutlined } from '@ant-design/icons';
import { Form as FormAnt, Input, Button, Row, Col } from 'antd';
import { Formik, Field } from 'formik';

const Container = styled.div`
  width: 1000px;
  height: 500px;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.06);
  margin: 15px auto;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled(FormAnt.Item)`
  width: 500px;
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

export const AddReviewTitle: FunctionComponent = () => {
  const initialValues = {
    titleReview: '',
    introReview: '',
    imageCover: '',
    body: '',
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const onSubmit = () => {
    console.log('onSubmit');
  };

  return (
    <Fragment>
      <BreadCrumb />
      <Container>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit, errors }) => {
            return (
              <StyledForm onSubmit={handleSubmit}>
                <FormItem>
                  <h1>เพิ่มหัวข้อรีวิว</h1>
                  {
                    <Input
                      prefix={<EditOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="เช่น คีย์บอร์ด ยี่ห้อ ... ใช้ดีมาก"
                    />
                  }
                  <span>*คุณสามารถแก้ไขภายหลังได้</span>
                </FormItem>
                <FormItem>
                  <StyledButton htmlType="submit">เริ่มต้นเขียนรีวิว</StyledButton>
                </FormItem>
              </StyledForm>
            );
          }}
        </Formik>
      </Container>
    </Fragment>
  );
};
