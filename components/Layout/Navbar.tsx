import { FunctionComponent } from "react/";
import { Menu } from 'antd';
import Styled from 'styled-components';
const menuList = [
    {
        'title': 'Home',
        'url': '',
    },
    {
        'title': 'test',
        'url': '',
    }
];
const MenuStyled = Styled(Menu)`
        line-height: 64px;
        text-align: right !important;
        padding:auto 10px;
        background-color:#00458B;
    `;
const Logo = Styled.div`
        background-image: url('./logo.png');
        background-size: contain;
        background-repeat: no-repeat;
        width: 66px;
        height: 66px;
        border-radius: 100%;
        position: absolute;
        top: 10px;
        left: 10px;
    `;

const MenuItem = Styled(Menu.Item)`
        color:white;
        &.ant-menu-item-selected,&:hover{
            color: white !important;
        }
    `;
const Navbar: FunctionComponent = () => {
    return (
        <nav>
            <Logo />
            <MenuStyled mode="horizontal" defaultSelectedKeys={['0']}>
                {menuList.map((item, index) => (<MenuItem key={index}>{item.title}</MenuItem>))}
            </MenuStyled>
        </nav >
    );
};
export default Navbar;
