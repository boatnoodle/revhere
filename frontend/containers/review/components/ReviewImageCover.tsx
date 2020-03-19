import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ImageOptimized } from 'components/ImageOptimized';

interface Props {
  imageCover: string;
}

const Container = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  margin: 32px auto;
`;

export const ReviewImageCover: FunctionComponent<Props> = ({ imageCover }) => {
  return (
    <Container>
      <ImageOptimized imgPath={imageCover} width={700} height={300} alt="imageCover" style={{ borderRadius: '12px' }} />
    </Container>
  );
};
