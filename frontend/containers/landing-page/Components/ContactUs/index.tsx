import React, { FunctionComponent } from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
import styled, { css } from 'styled-components';
import IconFeedback from '../../../../assets/icons/icon-feedback.svg';
import { OutlinePrimaryButton } from 'components/Button';
const BaseBoxCss = css`
  padding: 10px 20px;
  display: flex;
`;

const Container = styled.div`
  margin-top: 10px;
  background: white;
  border-radius: 13px;
`;
const Box = styled.div`
  ${BaseBoxCss}
  flex-direction: column;
  & div {
    margin-bottom: 10px;
  }
`;
const BoxRow = styled.div`
  ${BaseBoxCss}
  flex-direction: row;
`;
const TitleText = styled.div`
  font-size: 1.2em;
  margin-left: 10px;
  font-weight: bolder;
`;
const HrStyled = styled.hr`
  height: 1px;
  border: none;
  background-color: #cfd8dc;
`;
const TextAreaStyled = styled(TextArea)`
  resize: none;
  border-radius: 13px;
`;

export const ContactUs: FunctionComponent = () => {
  return (
    <Container>
      <BoxRow>
        <IconFeedback />
        <TitleText>ส่งความเห็นถึงเรา</TitleText>
      </BoxRow>
      <HrStyled />
      <Box>
        <div>
          เรามีความยินดีอย่างยิ่ง ที่จะให้คุณมีส่วนร่วมใน การพัฒนาสถานที่แห่งนี้ และขอบคุณล่วงหน้า
          สำหรับข้อเสนอแนะหรือความคิดเห็นของคุณ
        </div>
        <TextAreaStyled allowClear rows={5} placeholder="กรุณาเข้าสู่ระบบ" />
        <div style={{ marginTop: '10px', textAlign: 'right' }}>
          <OutlinePrimaryButton>ส่งข้อความ</OutlinePrimaryButton>
        </div>
      </Box>
    </Container>
  );
};
