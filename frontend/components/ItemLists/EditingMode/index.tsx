import React from 'react';
import styled from 'styled-components';
import { Menu, Dropdown } from 'antd';
import { REVIEW_STATUS_TEXT } from 'utils/reviewStatus';

const Container = styled.div`
  display: flex;
  div {
    :before {
      content: '';
    }
    :not(:first-child) {
      margin: 0 5px;
    }
    :nth-child(2) {
      &:before {
        margin: 0 5px;
        content: '|';
        color: #607d8b;
      }
    }
  }
`;

const Status = styled.div``;
const ManageText = styled.div`
  color: #17bf63;
`;
const ManageBtn = styled.div`
  a {
    font-size: 1.1em;
    font-weight: bolder;
    color: #607d8b;
  }
`;
const menuLists = [
  { label: 'เปลี่ยนสถานะ', onClick: '' },
  { label: 'ลบ', onClick: '' },
];
const MenuStyled = styled(Menu)`
  border-radius: 7px;
`;

const menu = (
  <MenuStyled>
    {menuLists.map(({ label, onClick }, index) => {
      return (
        <Menu.Item key={index}>
          <a>{label}</a>
        </Menu.Item>
      );
    })}
  </MenuStyled>
);

interface Props {
  status: string;
}
export const EditingMode: React.FC<Props> = ({ status }) => {
  return (
    <Container>
      <Status>{REVIEW_STATUS_TEXT[status]}</Status>
      <ManageText>แก้ไข</ManageText>
      <ManageBtn>
        <Dropdown overlay={menu} trigger={['click']}>
          <a onClick={e => e.preventDefault()}>...</a>
        </Dropdown>
      </ManageBtn>
    </Container>
  );
};
