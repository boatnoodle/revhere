import React, { FunctionComponent } from 'react/';
import { Menu, Input, Button } from 'antd';
import Styled from 'styled-components';
import RouterLInk from 'next/router';

const { Search } = Input;
const MenuStyled = Styled(Menu)`
        text-align: right !important;
        padding:auto 10px;
    `;
const Logo = Styled.div`
  background-image: url(./logo.png);
    background-size: 53px 48px;
    background-repeat: no-repeat;
    background-position: -2px -2px;
    width: 48px;
    height: 46px;
    position: absolute;
    top: 14px;
    left: 10px;
    border-radius: 100%;
    `;

const MenuItem = Styled(Menu.Item)`
        color:black;
        padding:10px 5px;
        border:none !important;
        &.ant-menu-item-selected,&:hover{
            color: gray!important;
        }
    `;

const NotificationIcon = Styled.img`
    width:30px;
    height:30px;
`;

const menuList = [
    {
        url: null,
        component: <Search placeholder="ค้นหาบน Revhere" onSearch={value => console.log(value)} />,
    },
    {
        url: '/',
        component: <NotificationIcon src="./icons/icon-bell.png" />,
    },
    {
        url: '/',
        component: <Button>เข้าสู่ระบบ</Button>,
    },
];
// Functionality
const linkToUrl = url => (url ? RouterLInk.push(url) : null);

const Navbar: FunctionComponent = () => {
    return (
        <nav>
            <Logo />
            <MenuStyled mode="horizontal" defaultSelectedKeys={['0']}>
                <MenuItem></MenuItem>
                {menuList.map((item, index) => (
                    <MenuItem onClick={() => linkToUrl(item.url)} key={index}>
                        {item.component}
                    </MenuItem>
                ))}
            </MenuStyled>
        </nav>
    );
};
export default Navbar;
