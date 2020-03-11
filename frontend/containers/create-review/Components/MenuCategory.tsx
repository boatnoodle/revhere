import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'antd';
import IconHeart from '../../../assets/icons/icons8-ok.svg';

const ButtonMenuCategory = styled(Button)`
  display: flex;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #cfd8dc;
  color: #90a4ae;
  letter-spacing: 0.24px;
  & svg {
    color: #cfd8dc;
    margin-right: 5px;
  }

  &.active {
    background: #263238 0% 0% no-repeat padding-box;
    border: 1px solid #263238;
    &:hover svg,
    &:focus svg {
      background: none !important;
    }
  }
  &:hover,
  &:focus {
    background: #263238 0% 0% no-repeat padding-box;
    border: 1px solid #263238;
    svg {
      background: #ffffff;
    }
  }
`;

const IconCircle = styled.svg`
  width: 20px;
  height: 20px;
  background: #cfd8dc 0% 0% no-repeat padding-box;
  border-radius: 50%;
`;

export const MenuCategory = () => {
  return (
    <Row style={{ marginTop: '40px', marginBottom: '20px' }} gutter={16}>
      <Col className="gutter-row">
        <ButtonMenuCategory className="active" type="primary" shape="round" icon={<IconHeart />}>
          หนังสือ
        </ButtonMenuCategory>
      </Col>
      <Col className="gutter-row">
        <ButtonMenuCategory type="primary" shape="round" icon={true ? <IconCircle /> : <IconHeart />}>
          พ่อกับลูก
        </ButtonMenuCategory>
      </Col>
      <Col className="gutter-row">
        <ButtonMenuCategory type="primary" shape="round" icon={true ? <IconCircle /> : <IconHeart />}>
          แนวสัตว์
        </ButtonMenuCategory>
      </Col>
      <Col className="gutter-row">
        <ButtonMenuCategory type="primary" shape="round" icon={true ? <IconCircle /> : <IconHeart />}>
          เพื่อนมาบ้าน
        </ButtonMenuCategory>
      </Col>
    </Row>
  );
};
