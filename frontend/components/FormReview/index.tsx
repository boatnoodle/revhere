import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';

import { useMutation } from '@apollo/react-hooks';
import { Form as FormAnt, Input, Button, Upload, Spin } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useFormikContext, Field } from 'formik';
import { InputText } from 'components/Input/InputText';
import { Editor } from './Editor';
import { MenuCategory } from './MenuCategory';
import { useDebounce } from 'hooks/useDebounce';
import { usePrevious } from 'hooks/usePrevious';
import { UPLOAD_IMAGE_REVIEW } from 'containers/create-review/graphql';
import { ImageOptimized } from 'components/ImageOptimized';

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

interface Props {
  typeForm?: string;
}

export const FormReview: FunctionComponent<Props> = ({ typeForm = 'create' }) => {
  const { submitForm, values } = useFormikContext();
  const debounceValue = useDebounce(values, 1000);
  const previousValue = usePrevious(debounceValue);
  const [uploadImageReview, { loading }] = useMutation(UPLOAD_IMAGE_REVIEW);

  const customUpload = async (
    file: object,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
  ): Promise<any> => {
    // getBase64(file, imageUrl => setImageUrl(imageUrl));
    const result = await uploadImageReview({ variables: { file, path: 'review-image-cover' } });
    setFieldValue('imageCover', result?.data?.imageReview?.urlImage);
  };

  const uploadButton = <ButtonUpload className="ant-upload-text">อัพโหลดรูป</ButtonUpload>;

  useEffect(() => {
    if (JSON.stringify(previousValue) !== JSON.stringify(values) && previousValue !== undefined) {
      submitForm();
    }
  }, [debounceValue]);

  return (
    <FormAnt onFinish={submitForm} layout="vertical">
      <FormItem>
        <Field name="categoryReview">
          {({ field, form: { setFieldValue } }): JSX.Element => {
            return <MenuCategory {...field} setFieldValue={setFieldValue} />;
          }}
        </Field>
      </FormItem>
      <FormItem>
        <Field name="imageCover">
          {({ field: { value }, form: { setFieldValue } }): JSX.Element => {
            return (
              <UploadStyled
                name="avatar"
                listType="picture-card"
                showUploadList={false}
                customRequest={({ file }: { file: object }): Promise<any> => customUpload(file, setFieldValue)}
              >
                {loading ? (
                  <Spin tip="Uploading..." />
                ) : value ? (
                  <ImageOptimized imgPath={value} alt="avatar" width={700} height={300} />
                ) : (
                  uploadButton
                )}
              </UploadStyled>
            );
          }}
        </Field>
      </FormItem>
      <FormItem>
        <Field name="titleReview">
          {({ field }): JSX.Element => <InputText limitCharactor={80} placeholder="หัวข้อ" {...field} />}
        </Field>
      </FormItem>
      <FormItem>
        <Field name="introReview">
          {({ field }): JSX.Element => <InputText limitCharactor={200} placeholder="เกริ่นนำ" {...field} />}
        </Field>
      </FormItem>
      <FormItem>
        <Field name="body">
          {({ field, form: { setFieldValue } }): JSX.Element => {
            return <Editor {...field} setFieldValue={setFieldValue} />;
          }}
        </Field>
      </FormItem>
    </FormAnt>
  );
};
