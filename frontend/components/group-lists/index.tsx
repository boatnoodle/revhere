import React, { FunctionComponent } from 'react';
import Styled from 'styled-components';

import { List } from 'antd';
import { OutlinePrimaryButton } from 'components/Button';

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
const LookMore = Styled.div`
    font-weight: 500;
    text-align: center;
`;
interface Props {
  data: Array<{
    imageUrl?: string;
    name: string;
    memberCount: string;
  }>;
}
const GroupLists: FunctionComponent<Props> = ({ data }) => {
  return (
    <List
      size="large"
      footer={
        <LookMore>
          <a href="#">ดูทั้งหมด</a>
        </LookMore>
      }
      bordered
      dataSource={data}
      renderItem={(item, index) => (
        <StyledListItem key={index}>
          <div>
            <img src={item.imageUrl} width="32" height="32" />
            <div className="with-new-line">
              <span>{item.name}</span>
              <span className="txt-muted">{item.memberCount}</span>
            </div>
            <OutlinePrimaryButton>เข้าร่วม</OutlinePrimaryButton>
          </div>
        </StyledListItem>
      )}
    />
  );
};
export default GroupLists;
