import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { Form as FormAnt, Input, Button, Upload } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useFormikContext, Field } from 'formik';
import { InputText } from 'components/Input/InputText';
import { Editor } from './Editor';

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
    width: 100%;
    height: 300px;
  }
  .ant-upload.ant-upload-select-picture-card {
    width: 100%;
    height: 300px;
  }
`;

const ButtonUpload = styled(Button)`
  width: 140px;
  height: 32px;
  border: 1px solid #90a4ae;
  border-radius: 16px;
`;

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

export const FormCreateReview: FunctionComponent = () => {
  const { submitForm } = useFormikContext();
  const [imageUrl, setImageUrl] = useState();

  const customUpload = (file, setFieldValue) => {
    getBase64(file, imageUrl => setImageUrl(imageUrl));
    setFieldValue('imageCover', file);
  };

  const uploadButton = <ButtonUpload className="ant-upload-text">อัพโหลดรูป</ButtonUpload>;

  return (
    <FormAnt onFinish={submitForm} layout="vertical">
      <FormItem>
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
        <Field name="titleReview">
          {({ field }) => <InputText limitCharactor={10} placeholder="หัวข้อ" {...field} />}
        </Field>
      </FormItem>
      <FormItem>
        <Field name="introReview">
          {({ field }) => <InputText limitCharactor={120} placeholder="เกริ่นนำ" {...field} />}
        </Field>
      </FormItem>
      <FormItem>
        <Field name="body">
          {({ field, form: { setFieldValue } }) => {
            return <Editor {...field} setFieldValue={setFieldValue} body="" />;
          }}
        </Field>
      </FormItem>
      <FormItem>
        <StyledButton htmlType="submit">เริ่มต้นเขียนรีวิว</StyledButton>
      </FormItem>
    </FormAnt>
  );
};
