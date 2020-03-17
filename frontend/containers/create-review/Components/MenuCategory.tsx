import React, { useState } from 'react';
import styled from 'styled-components';
import IconHeart from '../../../assets/icons/icons8-ok.svg';

import { Row, Col, Button } from 'antd';
import { NewReview } from 'types/review';

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

const reviewCategories = [
  {
    name: 'หนังสือ',
  },
  {
    name: 'ภาพยนต์',
  },
  {
    name: 'ดนตรี',
  },
  {
    name: 'คอร์ส',
  },
  {
    name: 'สถานที่',
  },
  {
    name: 'อื่นๆ',
  },
];

interface Props {
  name: string;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  values: NewReview;
}

export const MenuCategory: React.FC<Props> = ({ name, setFieldValue }) => {
  const [category, setCategory] = useState('');

  const handleOnChange = (value: string): void => {
    setFieldValue(name, value);
    setCategory(value);
  };

  return (
    <Row style={{ marginTop: '40px', marginBottom: '20px' }} gutter={16}>
      {reviewCategories.map((item, index) => {
        return (
          <Col key={index} className="gutter-row">
            <ButtonMenuCategory
              className={category === item.name ? 'active' : ''}
              onClick={(): void => handleOnChange(item.name)}
              type="primary"
              shape="round"
              icon={category === item.name ? <IconHeart /> : <IconCircle />}
            >
              {item.name}
            </ButtonMenuCategory>
          </Col>
        );
      })}
    </Row>
  );
};
