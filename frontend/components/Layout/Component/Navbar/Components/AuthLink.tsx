import React from 'react';
import { useRouter } from 'next/router';

import { DownOutlined, LoadingOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button } from 'antd';
import { useSession } from 'hooks/useSession';
import { useFirebase } from 'hooks/useFirebase';

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

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="createReview">เขียนรีวิว</Menu.Item>
      <Menu.Item key="reviewLists">รีวิวของคุณ</Menu.Item>
      <Menu.Item key="signOut"> ออกจากระบบ </Menu.Item>
    </Menu>
  );

  if (initializing) {
    return <LoadingOutlined style={{ fontSize: 24 }} spin />;
  } else if (user) {
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          {user?.displayName} <DownOutlined />
        </a>
      </Dropdown>
    );
  } else {
    return <Button onClick={() => setVisible(true)}>เข้าสู่ระบบ</Button>;
  }
};
