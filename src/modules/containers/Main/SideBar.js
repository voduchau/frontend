import React, { useState } from 'react';
import { Layout, Menu, Switch } from 'antd';
import {
    MenuUnfoldOutlined,
    BulbOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import logo from '../../../assets/images/logo.png';

const { Header, Sider, Content } = Layout;

const SideBar = (props) => {
    const {
        theme,
        collapsed,
        changeTheme,
        setCollapsed,
        matches
    } = props;

    return (
        <Sider
            width={256}
            breakpoint="lg"
            trigger={null}
            theme={theme}
            onBreakpoint={broken => {
                setCollapsed(broken)
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            className="antd-sider-container"
            collapsible
            collapsed={collapsed}
        >
            <div className="logo-sidebar">
                <img src={logo} alt="logo-sider" />
            </div>
            <Menu className="ant-menu-sider" theme={theme} mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    User
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    Player
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    Upload
                </Menu.Item>
                <Menu.SubMenu key="sub1" title="Location">
                    <Menu.Item key="4">Quận 1</Menu.Item>
                    <Menu.Item key="5">Quận 2</Menu.Item>
                </Menu.SubMenu>
            </Menu>
            <div className="swithTheme">
                <BulbOutlined />
                <span>Swith theme</span>
                <Switch
                    checked={theme === 'dark'}
                    onChange={changeTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                />
            </div>
        </Sider>
    );
}
export default SideBar;
