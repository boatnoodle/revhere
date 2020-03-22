import React, { useState } from 'react';
import styled from 'styled-components';
import { notification } from 'antd';
import { Menu, Dropdown } from 'antd';
import { REVIEW_STATUS_TEXT, REVIEW_STATUS } from 'utils/reviewStatus';
import { UPDATE_STATUS_REVIEW } from '../graphql';
import { useMutation } from '@apollo/react-hooks';

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
const MenuStyled = styled(Menu)`
  border-radius: 7px;
`;

interface Props {
  status: string;
  id: string;
}
export const EditingMode: React.FC<Props> = ({ status, id }) => {
  const [stateStatus, setStateStatus] = useState(status);
  const displayStatus = stateStatus === 'draft' ? REVIEW_STATUS_TEXT['publish'] : REVIEW_STATUS_TEXT['draft'];
  const [updateReviewStatus] = useMutation(UPDATE_STATUS_REVIEW, {
    onCompleted: ({ updateStatusReview: { status } }) => {
      setStateStatus(status);
      notification.success({
        message: 'เปลี่ยนสถานะเป็น' + displayStatus,
      });
    },
  });
  const menuLists = [
    {
      label: 'เปลี่ยนสถานะเป็น ' + displayStatus,
      function: (id: string, status: string) => {
        updateReviewStatus({
          variables: { _id: id, status: status === 'draft' ? REVIEW_STATUS['publish'] : REVIEW_STATUS['draft'] },
        });
      },
    },
    {
      label: 'ลบ',
      function: (id: string, status: string) => {},
    },
  ];
  const menu = (
    <MenuStyled
      onClick={({ key }) => {
        menuLists[key].function(id, stateStatus);
      }}
    >
      {menuLists.map(({ label }, index) => {
        return (
          <Menu.Item key={index}>
            <a>{label}</a>
          </Menu.Item>
        );
      })}
    </MenuStyled>
  );
  return (
    <Container>
      <Status>{REVIEW_STATUS_TEXT[stateStatus]}</Status>
      <ManageText>แก้ไข</ManageText>
      <ManageBtn>
        <Dropdown overlay={menu} trigger={['click']}>
          <a onClick={e => e.preventDefault()}>...</a>
        </Dropdown>
      </ManageBtn>
    </Container>
  );
};
