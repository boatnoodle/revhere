import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { BthWithIcon, OutlineDefaultButton } from 'components/Button';

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
  margin: 32px auto 0 auto;
  border-radius: 12px;
  background: white url('/images/image-reviewer.png');
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
const CloseBtn = styled.div`
  &:after {
    content: 'x';
    color: #90a4ae;
  }
  position: absolute;
  top: 4px;
  right: 15px;
  font-size: 1.5em;
  cursor: pointer;
`;

export const Notification: FunctionComponent<Props> = ({ title, description }) => {
  const [isShowingNotification, setIsShowingNotification] = useState(true);
  return (
    <Container style={{ display: !isShowingNotification ? 'none' : 'inherit' }}>
      <CloseBtn onClick={() => setIsShowingNotification(false)} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BthWithIcon style={{ marginTop: 10 }}>บอกต่อเพื่อนๆ</BthWithIcon>
      <OutlineDefaultButton>สมัครสมาชิก</OutlineDefaultButton>
    </Container>
  );
};
