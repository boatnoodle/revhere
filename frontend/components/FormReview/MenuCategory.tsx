import React, { useState } from 'react';
import styled from 'styled-components';
import IconHeart from '../../assets/icons/icons8-ok.svg';

import { useQuery } from '@apollo/react-hooks';
import { Row, Col, Button } from 'antd';
import { NewReview } from 'types/review';
import { GET_CATEGORY_REVIEW } from './graphql';
import { CategoryReview } from 'types/categoryReview';

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

interface Props {
  name: string;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  value: string;
}

export const MenuCategory: React.FC<Props> = ({ name, setFieldValue, value }) => {
  const { data, loading, error } = useQuery(GET_CATEGORY_REVIEW);
  const [categoryId, setCategoryId] = useState(null);

  const handleOnChange = (value: string): void => {
    setFieldValue(name, value);
    setCategoryId(value);
  };

  return (
    <Row style={{ marginTop: '40px', marginBottom: '20px' }} gutter={16}>
      {data?.categoryReview.map((item, index) => {
        return (
          <Col key={index} className="gutter-row">
            <ButtonMenuCategory
              className={categoryId === item?._id || value === item?._id ? 'active' : ''}
              onClick={(): void => handleOnChange(item._id)}
              type="primary"
              shape="round"
              icon={categoryId === item?._id || value === item?._id ? <IconHeart /> : <IconCircle />}
            >
              {item.name}
            </ButtonMenuCategory>
          </Col>
        );
      })}
    </Row>
  );
};
