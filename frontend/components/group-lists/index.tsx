import React, { FunctionComponent, Fragment } from 'react';
import { List } from 'antd';
import Styled from 'styled-components';

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
const LookMore = Styled.div`
    font-weight: 500;
    text-align: center;
`;
interface Props {
  data: Array<{
    imageUrl: string;
    name: string;
    memberCount: string;
  }>;
}
const GroupLists: FunctionComponent<Props> = ({ data }) => {
  return (
    <Fragment>
      <List
        size="large"
        footer={
          <LookMore>
            <a href="#">ดูทั้งหมด</a>
          </LookMore>
        }
        bordered
        dataSource={data}
        renderItem={item => (
          <StyledListItem>
            <div>
              <img src={item.imageUrl} width={32} height={32} />
              <div className="with-new-line">
                <span>{item.name}</span>
                <span className="txt-muted">{item.memberCount}</span>
              </div>
              <StyledButton>เข้าร่วม</StyledButton>
            </div>
          </StyledListItem>
        )}
      />
    </Fragment>
  );
};
export default GroupLists;
