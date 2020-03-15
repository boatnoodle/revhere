/* eslint-disable quotes */
import React, { useState } from 'react';
import styled from 'styled-components';

import { Input } from 'antd';

const InputTextStyled = styled(Input)`
  height: 48px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #90a4ae;
  border-radius: 6px;
  align-items: center;
`;

export const InputText = ({ placeholder, limitCharactor = 10 }) => {
  const [limitSuffix, setLimitSuffix] = useState(null);

  const limitText = e => {
    const value = e.target.value?.length;
    setLimitSuffix(`${value}/${limitCharactor}`);
  };

  return (
    <InputTextStyled
      placeholder={placeholder}
      onChange={limitText}
      maxLength={limitCharactor}
      suffix={limitSuffix || `0/${limitCharactor}`}
    />
  );
};
