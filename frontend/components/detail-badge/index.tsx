import React, { FunctionComponent } from 'react';
import Styled from 'styled-components';
import { List } from 'antd';

const StyledListItem = Styled(List.Item)`
    & div {display:flex;}
    & div.with-new-line{flex-direction:column}
    & img{border-radius:50%} 
    & span {font-weight:500;margin-left:10px;}
    & span.txt-muted{
        font-size: 13px;
        color: gray;
        font-weight: unset;
    }
    & button{position: absolute !important;right:14px;}
`;
const StyledButton = Styled.button`
   border-radius: 16px;
    border: 1px solid #17BF63!important;
    background-color: white;
    font-weight: bolder;
    color: #17BF63;
    padding: 2px 23px;
    font-size: 16px;
`;

interface Props {
  imageUrl: string;
  title: string;
  subTitle: string;
}

const Component: FunctionComponent<Props> = ({ imageUrl, title, subTitle }) => {
  return (
    <StyledListItem>
      <div>
        <img src={imageUrl} width={32} height={32} />
        <div className="with-new-line">
          <span>{title}</span>
          <span className="txt-muted">{subTitle}</span>
        </div>
        {/*<StyledButton>เข้าร่วม</StyledButton>*/}
      </div>
    </StyledListItem>
  );
};
export default Component;
