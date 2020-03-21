/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable indent */
import React from 'react';
import dynamic from 'next/dynamic';

import { useMutation } from '@apollo/react-hooks';
import { UPLOAD_IMAGE_REVIEW_DETAIL } from 'containers/update-review/graphql';
import { IAllProps } from '@tinymce/tinymce-react';

const TinyMceEditor = dynamic<IAllProps>(() => import('@tinymce/tinymce-react').then(mod => mod.Editor) as any, {
  ssr: false,
});

interface Props {
  setFieldValue: any;
  value: string;
}

export const Editor: React.FC<Props> = ({ setFieldValue, value }) => {
  const [uploadImageReviewDetail] = useMutation(UPLOAD_IMAGE_REVIEW_DETAIL);

  const handleEditorChange = (content, editor) => {
    setFieldValue('body', content);
  };

  return (
    <TinyMceEditor
      apiKey="l521ol91f9n8nq7xqws25ffwjk6co687wtgf604pkxrbfyx9"
      initialValue={value}
      init={{
        content_style: 'body{font-size: 1.2rem; padding: 20px;} img {max-width: 100%;}',
        width: 700,
        min_height: 10000,
        menubar: false,
        toolbar_sticky: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code wordcount',
        ],
        toolbar:
          'fullscreen undo redo | image code | formatselect | bold italic backcolor |  bullist numlist outdent indent | removeformat',
        branding: false,
        images_upload_handler: async (blobInfo, success, failure) => {
          const { data } = await uploadImageReviewDetail({
            variables: { file: blobInfo.blob(), path: 'review-image-detail' },
          });
          const { imageReviewDetail } = data;
          const gumletImagePath = `https://revhere.gumlet.com/${imageReviewDetail.urlImage}`;

          success(gumletImagePath);
        },
      }}
      onEditorChange={handleEditorChange}
    />
  );
};
