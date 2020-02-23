import React, { useState } from 'react';

import { Menu, Dropdown, Button, Icon } from 'antd';
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
    return <Icon type="loading" style={{ fontSize: 24 }} spin />;
  } else if (user) {
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          {user?.displayName} <Icon type="down" />
        </a>
      </Dropdown>
    );
  } else {
    return <Button onClick={() => setVisible(true)}>เข้าสู่ระบบ</Button>;
  }
};
