import styled, { css } from 'styled-components';

import { Button } from 'antd';

interface Props {
  fontSize?: string;
}
const BaseStyle = css`
  font-size: ${(props: Props): string => props.fontSize || '14px'};
`;

const BaseButtonStyle = css`
  ${BaseStyle};
  background: relative;
  top: 0;
  right: 10px;
  border-radius: 21px;
  background: #17bf63;
  border: 0;
  color: white;
  padding: 2px 23px;
`;

const BaseOutlineButton = css`
  ${BaseStyle};
  border-radius: 16px;
  border: 1px solid #17bf63 !important;
  background-color: white;
  font-weight: bolder;
  color: #17bf63;
  padding: 2px 23px;
`;

export const PrimaryButton = styled(Button)<Props>`
  ${BaseButtonStyle};
  background: #17bf63;
  &:hover {
    color: #17bf63 !important;
    background: white !important;
    border: 1px solid #17bf63 !important;
  }
`;

export const OutlinePrimaryButton = styled(Button)`
  ${BaseOutlineButton};
  :hover {
    color: white;
    background: #17bf63 !important;
  }
`;
