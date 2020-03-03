import React, { FunctionComponent, Fragment } from 'react';
import styled from 'styled-components';

const ReviewCover = styled.div`
  margin: 20px auto;
  width: 100%;
  height: 300px;
  background: gray;
  border-radius: 10px;
`;
const Title = styled.div`
  font-size: 1.5em;
  font-weight: 500px;
`;
interface Props {
  title?: string;
}
export const Cover: FunctionComponent<Props> = ({ title }) => {
  return (
    <Fragment>
      <Title>{title}</Title>
      <ReviewCover />
    </Fragment>
  );
};
