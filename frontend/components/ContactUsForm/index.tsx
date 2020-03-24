/* eslint-disable @typescript-eslint/camelcase */
import React, { FunctionComponent, Fragment } from 'react';
import IconFeedback from '../../assets/icons/icon-feedback.svg';
import styled, { css } from 'styled-components';

import { Input } from 'antd';
import { OutlinePrimaryButton } from 'components/Button';
import { CopyRightText } from 'components/CopyRightText';
import fetch from 'isomorphic-unfetch';

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

const sendFeedback = async () => {
  const accessToken = process.env.CLICKUP_PERSONAL_TOKEN;
  const feedbackListsId = process.env.CLICKUP_FEEDBACK_LISTS_ID;
  const url = 'https://private-anon-2ee8b78d31-clickup20.apiary-proxy.com/api/v2/list/10002611/task';

  try {
    const body = {
      name: 'Feedback ลูกค้า',
      content: 'New Task Content',
      tags: ['feedback'],
      priority: 1,
      date_created: '1567780450202',
      notify_all: true,
      parent: null,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'pk_3665453_9WVOB8EUVLZFEDJ4B711MM51CPRCKUSO',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log(response);
  } catch (error) {
    console.log(error, 'error');
  }
};

export const ContactUsForm: FunctionComponent = () => {
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
          <TextAreaStyled allowClear rows={5} placeholder="กรุณาเข้าสู่ระบบ" />
          <div style={{ marginTop: '10px', textAlign: 'right' }}>
            <OutlinePrimaryButton onClick={sendFeedback}>ส่งข้อความ</OutlinePrimaryButton>
          </div>
        </Box>
      </Container>
      <CopyRightTextBox>
        <CopyRightText />
      </CopyRightTextBox>
    </Fragment>
  );
};
