import React, { useState, Fragment } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import avatar from '../../../assets/images/avatar.png';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    NotificationOutlined,
} from '@ant-design/icons';
import "antd/dist/antd.css";
import { Badge } from 'antd';
import us from '../../../assets/images/us.png'
import vietnam from '../../../assets/images/vietnam.png'
import korea from '../../../assets/images/korea.png'

const { SubMenu } = Menu;

const Header = (props) => {
    const [currentLanguage, setCurrentLanguage] = useState("option1");

    const handleChangeLanguage = (e) => {
        setCurrentLanguage(e.key)
    }
    const handleClickMenu = e => { }

    const handleSignOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        props.history.replace("/login");
    }

    const rightContent = [
        <Menu
            className="menu-right-user"
            key="user"
            mode="horizontal"
            onClick={handleClickMenu}
        >
            <SubMenu title={
                <>
                    <span style={{ color: '#999', marginRight: 4 }}>
                        Hi,
                                </span>
                    <span>hunghaubmt</span>
                    <Avatar style={{ marginLeft: 8 }} src={avatar} />
                </>
            }
            >
                <Menu.Item key="SignOut">
                    <a onClick={handleSignOut}>Sign out</a>
                </Menu.Item>
                <Menu.Item key="Setting">
                    Setting
                </Menu.Item>
            </SubMenu>
        </Menu>
    ]

    rightContent.unshift(
        <Menu
            className="menu-right-language"
            onClick={handleChangeLanguage}
            selectedKeys={[currentLanguage]}
            key="language"
            mode="horizontal"
        >
            <SubMenu key="SubMenu" title={<Avatar src={us} size="small" />}>
                <Menu.Item key="option1">
                    <Avatar src={vietnam} style={{ marginRight: 8 }} />
                        Viet Nam
                </Menu.Item>
                <Menu.Item key="option2">
                    <Avatar src={korea} style={{ marginRight: 8 }} />
                         Korea
                </Menu.Item>
            </SubMenu>
        </Menu>
    )

    rightContent.unshift(
        <Badge
            count={3}
            dot
            key="notification"
        >
            <NotificationOutlined style={{ fontSize: '20px' }} />
        </Badge>
    )


    return (
        <Layout.Header
            className="header-container"
        >
            <div>
                {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: "trigger",
                    onClick: props.toggle,
                })}
            </div>
            <div className="header-menu-right">
                {rightContent}
            </div>
        </Layout.Header>
    );
}

export default Header;
