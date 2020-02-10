import { FunctionComponent } from "react/";
import { Menu } from 'antd';
const Navbar: FunctionComponent = () => {
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
    const navStyle = {
        lineHeight: '64px',
    };
    return (<nav>
        <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={navStyle}>
            {menuList.map((item, index) => (<Menu.Item key={index}>{item.title}</Menu.Item>))}
        </Menu>
    </nav >);
};
export default Navbar;
