/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable indent */
import React from 'react';
import dynamic from 'next/dynamic';

import { useMutation } from '@apollo/react-hooks';
import { UPLOAD_IMAGE_REVIEW_DETAIL } from '../../graphql';
import { IAllProps } from '@tinymce/tinymce-react';

const TinyMceEditor = dynamic<IAllProps>(() => import('@tinymce/tinymce-react').then(mod => mod.Editor) as any, {
  ssr: false,
});

interface Props {
  setFieldValue: any;
  values: any;
  body: string;
}

export const Editor: React.FC<Props> = ({ setFieldValue, values, body }) => {
  const [uploadImageReviewDetail] = useMutation(UPLOAD_IMAGE_REVIEW_DETAIL);

  const handleEditorChange = (content, editor) => {
    setFieldValue('body', content);
  };

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
          const { data } = await uploadImageReviewDetail({ variables: { file: blobInfo.blob() } });
          const { imageReviewDetail } = data;
          const gumletImagePath = `https://revhere.gumlet.com/${imageReviewDetail.urlImage}`;

          success(gumletImagePath);
        },
      }}
      onEditorChange={handleEditorChange}
    />
  );
};
