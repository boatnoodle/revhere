import React, { useState } from 'react';

import { DownOutlined, LoadingOutlined } from '@ant-design/icons';

import { Menu, Dropdown, Button } from 'antd';
import { useSession } from 'hooks/useSession';
import { useFirebase } from 'hooks/useFirebase';

export const AuthLink = ({ setVisible }) => {
  const { user, initializing } = useSession();
  const firebase = useFirebase();

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" onClick={() => firebase.doSignOut()}>
          ออกจากระบบ
        </a>
      </Menu.Item>
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
