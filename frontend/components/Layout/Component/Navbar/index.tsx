import React, { useState } from 'react';
import styled from 'styled-components';
import RouterLInk from 'next/router';
import Link from 'next/link';

import { Menu, Input } from 'antd';
import { ModalAuth } from '../ModaAuth';
import { AuthLink } from './Components/AuthLink';

const { Search } = Input;

const MenuStyled = styled(Menu)`
  text-align: right !important;
  border: none;
`;

const Logo = styled.a`
  color: #17bf63;
  font-size: 2em;
  font-weight: bold;
  margin: 10px;
  & span {
    color: #000000;
  }

  :hover {
    color: #17bf63;
  }
`;

const MenuItem = styled(Menu.Item)`
  color: black;
  padding: 10px 5px;
  border: none !important;
  &.ant-menu-item-selected,
  &:hover {
    color: gray !important;
  }
`;

const Nav = styled.div`
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-between;
`;

const SearchBox = styled.div`
  width: 500px;
  float: left;
`;

const SearchInput = styled(Search)`
  /* & input {
    border-radius: 15px !important;
    padding: 20px !important;
  } */
`;

const linkToUrl = url => (url ? RouterLInk.push(url) : null);

const Navbar: React.FunctionComponent = () => {
  const [visible, setVisible] = useState(false);

  const handleCancel = e => {
    setVisible(!visible);
  };

  return (
    <Nav>
      <Link href="/">
        <Logo>
          <span>Rev</span>here
        </Logo>
      </Link>
      <SearchBox>
        <SearchInput placeholder="ค้นหาบน Revhere" onSearch={value => console.log(value)} />
      </SearchBox>
      <MenuStyled mode="horizontal" defaultSelectedKeys={['0']}>
        <MenuItem>
          <AuthLink setVisible={setVisible} />
        </MenuItem>
      </MenuStyled>
      <ModalAuth handleCancel={handleCancel} visible={visible} />
    </Nav>
  );
};
export default Navbar;
