import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

// Props
interface Props {
  title: string;
  description: string;
}

// Custom components
const Container = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px 30px;
  margin: 10px auto;
  border-radius: 12px;
  background: white url('images/image-reviewer.png');
  background-size: 520px 200px;
  background-repeat: no-repeat;
  background-position: top right;
`;
const Title = styled.div`
  font-size: 1.7em;
  font-weight: bolder;
  width: 700px;
`;
const Description = styled.div`
  /* font: Regular 15px/23px IBM Plex Thai; */
  font-size: 1.2em;
  font-weight: 200;
  width: 700px;
`;

const index: FunctionComponent<Props> = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default index;
