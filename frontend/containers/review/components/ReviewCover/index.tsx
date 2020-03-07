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
  background: #f0f0f0;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ReviewCover: FunctionComponent<Props> = ({ imageCover }) => {
  return (
    <Container>
      <ImageOptimized imgPath={imageCover} width={1200} height={500} alt="imageCover" />
    </Container>
  );
};
