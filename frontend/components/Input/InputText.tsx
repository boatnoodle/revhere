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

interface Props {
  placeholder: string;
  limitCharactor: number;
  name: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  value: any;
}

export const InputText: React.FC<Props> = ({ placeholder, limitCharactor = 10, value, ...rest }) => {
  const defaultLimitSuffix = `${value?.length}/${limitCharactor}`;
  const [limitSuffix, setLimitSuffix] = useState(defaultLimitSuffix);

  const limitText = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value?.length;
    setLimitSuffix(`${value}/${limitCharactor}`);
  };

  return (
    <InputTextStyled
      placeholder={placeholder}
      onKeyUp={limitText}
      maxLength={limitCharactor}
      value={value}
      suffix={limitSuffix || `0/${limitCharactor}`}
      {...rest}
    />
  );
};
