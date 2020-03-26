/* eslint-disable @typescript-eslint/camelcase */
import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import IconFeedback from '../../assets/icons/icon-feedback.svg';
import styled, { css } from 'styled-components';

import { SEND_FEEDBACK } from './graphql';
import { useMutation } from '@apollo/react-hooks';
import { Input, notification } from 'antd';
import { OutlinePrimaryButton } from 'components/Button';
import { CopyRightText } from 'components/CopyRightText';

const { TextArea } = Input;
const BaseBoxCss = css`
  padding: 10px 20px;
  display: flex;
`;

const Container = styled.div`
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

const CopyRightTextBox = styled.div`
  text-align: center;
  margin-top: 15px;
`;

export const ContactUsForm: FunctionComponent = () => {
  const [content, setContent] = useState('');
  const [sendFeedback, { loading }] = useMutation(SEND_FEEDBACK, {
    onCompleted: data => {
      notification['success']({
        message: data.sendFeedback.message,
      });
      setContent('');
    },
  });

  const handleChange = e => {
    setContent(e.currentTarget.value);
  };

  const handleOnClick = () => {
    const payload = {
      name: 'Feedback ลูกค้า',
      content,
      tags: ['feedback'],
      priority: 1,
    };

    sendFeedback({ variables: { payload } });
  };

  return (
    <Fragment>
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
          <TextAreaStyled
            value={content}
            onChange={e => handleChange(e)}
            allowClear
            rows={5}
            placeholder="คำแนะนำ, ปัญหา, ติชม..."
          />
          <div style={{ marginTop: '10px', textAlign: 'right' }}>
            <OutlinePrimaryButton onClick={handleOnClick}>ส่งข้อความ</OutlinePrimaryButton>
          </div>
        </Box>
      </Container>
      <CopyRightTextBox>
        <CopyRightText />
      </CopyRightTextBox>
    </Fragment>
  );
};
