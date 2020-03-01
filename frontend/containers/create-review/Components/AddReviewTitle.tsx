/* eslint-disable indent */
import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import BreadCrumb from 'components/ฺBreadcrumb';
import dynamic from 'next/dynamic';

// import { Editor } from '@tinymce/tinymce-react';
import { EditOutlined } from '@ant-design/icons';
import { Form as FormAnt, Input, Button, Row, Col } from 'antd';
import { Formik, Field } from 'formik';
import { IAllProps } from '@tinymce/tinymce-react';
import { useFirebase } from 'hooks/useFirebase';
import firebase from 'firebase';

const Editor = dynamic<IAllProps>(() => import('@tinymce/tinymce-react').then(mod => mod.Editor) as any, {
  ssr: false,
});

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

export const AddReviewTitle: FunctionComponent = () => {
  const firebaseAuth = useFirebase();
  const [editorState, setEditorState] = useState();
  const initialValues = {
    titleReview: '',
    introReview: '',
    imageCover: '',
    body: '',
  };

  const onSubmit = () => {
    console.log('onSubmit');
  };

  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  };

  return (
    <Fragment>
      <BreadCrumb />
      <Container>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit, errors }) => {
            return (
              <FormAnt>
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
                <FormItem>
                  <Editor
                    apiKey="l521ol91f9n8nq7xqws25ffwjk6co687wtgf604pkxrbfyx9"
                    initialValue=""
                    init={{
                      height: 1000,
                      menubar: false,
                      plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                      ],
                      toolbar:
                        'undo redo | image code | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
                      branding: false,
                      // eslint-disable-next-line @typescript-eslint/camelcase
                      images_upload_handler: async (blobInfo, success, failure) => {
                        const storageRef = firebaseAuth.storage.ref();
                        const uploadTask = storageRef.child(`reviews/${Date.now()}`).put(blobInfo.blob());
                        uploadTask.on(
                          'state_changed',
                          snapshot => {
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            switch (snapshot.state) {
                              case firebase.storage.TaskState.PAUSED:
                                break;
                              case firebase.storage.TaskState.RUNNING:
                                break;
                            }
                          },
                          error => {
                            console.log(error);
                            failure(error);
                          },
                          () => {
                            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                              success(downloadURL);
                            });
                          },
                        );
                      },
                    }}
                    onEditorChange={handleEditorChange}
                  />
                </FormItem>
              </FormAnt>
            );
          }}
        </Formik>
      </Container>
    </Fragment>
  );
};
