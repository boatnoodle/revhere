/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
// import firebase from 'firebase';

import { IAllProps } from '@tinymce/tinymce-react';
import { useFirebase } from 'hooks/useFirebase';
import { useDebounce } from 'hooks/useDebounce';

const TinyMceEditor = dynamic<IAllProps>(() => import('@tinymce/tinymce-react').then(mod => mod.Editor) as any, {
  ssr: false,
});

interface Props {
  setFieldValue: any;
  values: any;
  body: string;
}

export const Editor: React.FC<Props> = ({ setFieldValue, values, body }) => {
  const firebaseAuth = useFirebase();
  const [content, setContent] = useState();
  const debounceValue = useDebounce(content, 300);

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };

  useEffect(() => {
    setFieldValue('body', debounceValue);
  }, [debounceValue]);

  // console.log(body, 'xx');
  return (
    <TinyMceEditor
      apiKey="l521ol91f9n8nq7xqws25ffwjk6co687wtgf604pkxrbfyx9"
      initialValue={body}
      init={{
        min_height: 1000,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | image code | formatselect | bold italic backcolor |  alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help',
        branding: false,
        images_upload_handler: async (blobInfo, success, failure) => {
          const storageRef = firebaseAuth.storage.ref();
          const uploadTask = storageRef.child(`reviews/${Date.now()}`).put(blobInfo.blob());
          uploadTask.on(
            'state_changed',
            snapshot => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
  );
};
