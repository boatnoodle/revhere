import React from 'react';
import styled from 'styled-components';

import { Button } from 'antd';

export const PrimaryButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 10px;
  border-radius: 21px;
  border: 0;
  background: #17bf63;
  color: white;
  padding: 8px 35px;

  :hover {
    color: white;
  }
`;

export const OutlinePrimaryButton = styled(Button)`
  border-radius: 16px;
  border: 1px solid #17bf63 !important;
  background-color: white;
  font-weight: bolder;
  color: #17bf63;
  padding: 2px 23px;
  font-size: 16px;

  :hover {
    color: white;
    background: #17bf63 !important;
  }
`;
