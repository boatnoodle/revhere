import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import BreadCrumb from 'components/ฺBreadcrumb';

import { Form as FormAnt, Input, Button, Upload, message } from 'antd';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { EditOutlined } from '@ant-design/icons';
import { Formik, Field } from 'formik';
import { CREATE_REVIEW } from '../graphql';

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
const FormAntStyled = styled(FormAnt)`
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

const UploadStyled = styled(Upload)`
  .avatar-uploader > .ant-upload {
    width: 300px;
    height: 300px;
  }
  .ant-upload.ant-upload-select-picture-card {
    width: 300px;
    height: 300px;
  }
`;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export const FormCreateReview: FunctionComponent = () => {
  const router = useRouter();
  const [createReview, { data, loading, error }] = useMutation(CREATE_REVIEW);
  const [imageUrl, setImageUrl] = useState();
  const initialValues = {
    titleReview: '',
    introReview: '',
    imageCover: null,
  };

  const onSubmit = async values => {
    const result = await createReview({ variables: { ...values } });
    message.success('บันทึกรีิวิวสำเร็จ');
    const reviewId = result?.data?.createReview?._id;
    router.push(`/update-review/${reviewId}`);
  };

  const customUpload = (file, setFieldValue) => {
    getBase64(file, imageUrl => setImageUrl(imageUrl));
    setFieldValue('imageCover', file);
  };

  const uploadButton = <div className="ant-upload-text">Upload</div>;

  return (
    <Fragment>
      <BreadCrumb />
      <Container>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleSubmit, errors }) => {
            console.log(values, 'values');
            return (
              <FormAntStyled onFinish={handleSubmit} layout="vertical">
                <h1>เพิ่มหัวข้อรีวิว</h1>
                <FormItem label="หัวข้อรีิวิว">
                  <Field name="titleReview">
                    {({ field }) => (
                      <Input
                        prefix={<EditOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="เช่น รีวิวคีย์บอร์ด Ducky shine"
                        {...field}
                      />
                    )}
                  </Field>
                </FormItem>
                <FormItem label="ข้อความเกริ่นนำ">
                  <Field name="introReview">
                    {({ field }) => (
                      <Input
                        prefix={<EditOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="เช่น คีย์บอร์ด ยี่ห้อ ... ใช้ดีมาก"
                        {...field}
                      />
                    )}
                  </Field>
                </FormItem>
                <FormItem label="รูปภาพปก">
                  <Field name="imageCover">
                    {({ form: { setFieldValue } }) => (
                      <UploadStyled
                        name="avatar"
                        listType="picture-card"
                        showUploadList={false}
                        customRequest={({ file }) => customUpload(file, setFieldValue)}
                      >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                      </UploadStyled>
                    )}
                  </Field>
                </FormItem>
                <FormItem>
                  <span>*คุณสามารถแก้ไขภายหลังได้</span>
                </FormItem>
                <FormItem>
                  <StyledButton htmlType="submit">เริ่มต้นเขียนรีวิว</StyledButton>
                </FormItem>
              </FormAntStyled>
            );
          }}
        </Formik>
      </Container>
    </Fragment>
  );
};
