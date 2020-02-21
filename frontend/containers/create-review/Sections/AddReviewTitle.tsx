import React, { FunctionComponent } from 'react';
import Styled from 'styled-components';
import BreadCrumb from 'components/ฺBreadcrumb';
import { Form, Icon, Input, Button, Row, Col } from 'antd';

const Container = Styled.div`
    width: 1000px;
    height: 500px;
    border-radius: 50px;
    background-color: rgba(0,0,0,0.06);
    margin: 15px auto;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledForm = Styled(Form.Item)`
    width: 500px;
`;
const StyledButton = Styled(Button)`
    background-color: #17BF63;
    border-color: #17BF63;
    color:white;
    & :hover{
        color: #17BF63 !important;
        background-color: white !important;
        border-color: #17BF63 !important;
    }
`;
const FormItem = Styled(Form.Item)`
    & :first-child{
        margin-bottom: 0 !important;
    }
`;

export const AddReviewTitle: FunctionComponent = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <BreadCrumb />
      <Container>
        {/* <Row>
          <Col span={12} offset={6}> */}
        <StyledForm onSubmit={handleSubmit}>
          <FormItem>
            <h1>เพิ่มหัวข้อรีวิว</h1>
            {
              <Input
                prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="เช่น คีย์บอร์ด ยี่ห้อ ... ใช้ดีมาก"
              />
            }
            <span>*คุณสามารถแก้ไขภายหลังได้</span>
          </FormItem>
          <FormItem>
            <StyledButton htmlType="submit">เริ่มต้นเขียนรีวิว</StyledButton>
          </FormItem>
        </StyledForm>
        {/* </Col>
        </Row> */}
      </Container>
    </React.Fragment>
  );
};
