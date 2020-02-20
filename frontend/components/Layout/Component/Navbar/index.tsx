import React, { useState } from 'react';
import Styled from 'styled-components';
import RouterLInk from 'next/router';

import { Menu, Input, Button } from 'antd';
import { ModalAuth } from '../ModaAuth';

const { Search } = Input;

const MenuStyled = Styled(Menu)`
        text-align: right !important;
`;

const Logo = Styled.div`
    color: #17BF63;
    font-size: 2em;
    font-weight: bold;
    margin:10px;
    & span{
        color: #000000;
    },
 
`;

const MenuItem = Styled(Menu.Item)`
        color:black;
        padding:10px 5px;
        border:none !important;
        &.ant-menu-item-selected,&:hover{
            color: gray!important;
        }
    `;

const Nav = Styled.div`
    display: flex;
    background-color: #FFFFFF;
    align-items: center;
    justify-content: space-between;
`;

const SearchBox = Styled.div`
    width:500px;
    float:left;
`;

const SearchInput = Styled(Search)`
    & input{
    border-radius:15px !important;
    padding:20px !important;
    }
`;

// Functionality
const linkToUrl = url => (url ? RouterLInk.push(url) : null);

const Navbar: React.FunctionComponent = () => {
  const [visible, setVisible] = useState();

  const handleCancel = e => {
    setVisible(!visible);
  };

  const menuList = [
    {
      url: '/',
      component: <Button onClick={() => setVisible(true)}>เข้าสู่ระบบ</Button>,
    },
  ];

  return (
    <Nav>
      <Logo>
        <span>Rev</span>here
      </Logo>
      <SearchBox>
        <SearchInput placeholder="ค้นหาบน Revhere" onSearch={value => console.log(value)} />
      </SearchBox>
      <MenuStyled mode="horizontal" defaultSelectedKeys={['0']}>
        {menuList.map((item, index) => (
          <MenuItem onClick={() => linkToUrl(item.url)} key={index}>
            {item.component}
          </MenuItem>
        ))}
      </MenuStyled>
      <ModalAuth handleCancel={handleCancel} visible={visible} />
    </Nav>
  );
};
export default Navbar;
