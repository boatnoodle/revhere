import React from 'react';
import styled from 'styled-components';
import RouterLink from 'next/router';
import { useRouter } from 'next/router';
import { DownOutlined, LoadingOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { PrimaryButton, OutlinePrimaryButton } from 'components/Button';
import { useSession } from 'hooks/useSession';
import { useFirebase } from 'hooks/useFirebase';
import IconMyBlog from '../../../../../assets/icons/icon-my-blog.svg';
import IconSignOut from '../../../../../assets/icons/icon-sign-out.svg';

const MenuStyled = styled(Menu)`
  top: 10px;
  border-radius: 7px;
`;
const MenuItem = styled(Menu.Item)`
  margin-bottom: 5px;
  display: flex;
  & svg {
    margin-right: 10px;
  }
`;

const ButtonList = styled.div`
  display: flex;
  & div {
    margin: 0 10px;
    display: flex;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 32px;
`;

const Container = styled.div``;

export const AuthLink = ({ setVisible }) => {
  const router = useRouter();
  const { user, initializing } = useSession();
  const firebase = useFirebase();

  const onClick = ({ key }) => {
    switch (key) {
      case 'signOut':
        firebase.doSignOut();
        break;
      case 'createReview':
        router.push('/create-review');
        break;
      case 'reviewLists':
        router.push('/review-lists');
        break;
      default:
        false;
        break;
    }
  };

  const menuLists = [
    {
      key: 'reviewLists',
      icon: <IconMyBlog />,
      label: 'บทความของฉัน',
    },
    {
      key: 'signOut',
      icon: <IconSignOut />,
      label: 'ออกจากระบบ',
    },
  ];

  const menu = (
    <MenuStyled onClick={onClick}>
      {menuLists.map(({ key, icon, label }) => (
        <MenuItem key={key}>
          {icon}
          {label}
        </MenuItem>
      ))}
    </MenuStyled>
  );

  const linkToUrl = url => (url ? RouterLink.push(url) : null);

  if (initializing) {
    return <LoadingOutlined style={{ fontSize: 24 }} spin />;
  } else if (user) {
    return (
      <Container>
        <OutlinePrimaryButton style={{ marginRight: 10 }} onClick={() => linkToUrl('/create-review')}>
          เขียนรีวิว
        </OutlinePrimaryButton>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <ProfileImage src={user?.photoURL} /> <DownOutlined />
          </a>
        </Dropdown>
      </Container>
    );
  } else {
    return (
      <ButtonList>
        <div>
          <OutlinePrimaryButton onClick={() => setVisible(true)}>เข้าสู่ระบบ</OutlinePrimaryButton>
        </div>
        <div>
          <PrimaryButton onClick={() => setVisible(true)}>สมัครสมาชิก</PrimaryButton>
        </div>
      </ButtonList>
    );
  }
};
