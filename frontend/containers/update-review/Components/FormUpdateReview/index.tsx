import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDebounce } from 'hooks/useDebounce';
import { usePrevious } from 'hooks/usePrevious';
import { Field, useFormikContext } from 'formik';
import { Form as FormAnt, Row, Col, Input } from 'antd';
import { Editor } from '../editor';
import { ImageOptimized } from 'components/ImageOptimized';
import { PrimaryButton } from 'components/Button';

const FormItem = styled(FormAnt.Item)`
  & :first-child {
    margin-bottom: 0 !important;
  }
`;

export const FormUpdateReview = ({ handleSubmit, data }) => {
  const { values, submitForm } = useFormikContext();
  const debounceValue = useDebounce(values, 1000);
  const previousValue = usePrevious(debounceValue);
  useEffect(() => {
    if (JSON.stringify(previousValue) !== JSON.stringify(values) && previousValue !== undefined) {
      submitForm();
    }
  }, [debounceValue]);

  return (
    <FormAnt onFinish={handleSubmit} layout="vertical">
      <h1>เขียนรีวิว</h1>
      <Row gutter={16}>
        <Col className="gutter-row">
          <FormItem label="รูปภาพปก">
            <ImageOptimized imgPath={data?.review?.imageCover} width={200} height={200} alt="imageCover" />
          </FormItem>
        </Col>
        <Col className="gutter-row" flex="auto">
          <FormItem label="หัวข้อรีวิว">
            <Field name="titleReview">
              {({ field }) => {
                return <Input {...field} />;
              }}
            </Field>
          </FormItem>
          <FormItem label="หัวข้อเกริ่นนำ">
            <Field name="introReview">
              {({ field }) => {
                return <Input {...field} />;
              }}
            </Field>
          </FormItem>
        </Col>
      </Row>
      {/* <FormItem style={{ marginTop: '20px' }}>
        <StyledButton htmlType="submit">บันทึกรีวิว</StyledButton>
      </FormItem> */}
      <FormItem>
        <Field name="body">
          {({ field, form: { setFieldValue } }) => {
            return <Editor {...field} setFieldValue={setFieldValue} body={data?.review?.body} />;
          }}
        </Field>
      </FormItem>
      {/* <FormItem style={{ marginTop: '20px' }}>
        <PrimaryButton htmlType="submit">บันทึกรีวิว</PrimaryButton>
      </FormItem> */}
    </FormAnt>
  );
};
