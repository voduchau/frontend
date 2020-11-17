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

    return (
        <Sider theme={props.theme} className="antd-sider-container" trigger={null} collapsible collapsed={props.collapsed}>
            <div className="logo-sidebar">
                <img src={logo} alt="logo-sider" />
                {/* {!props.collapsed ? <span>Admin - Dashboard</span> : ""} */}
            </div>
            <Menu className="ant-menu-sider" theme={props.theme} mode="inline" defaultSelectedKeys={['1']}>
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
                    checked={props.theme === 'dark'}
                    onChange={props.changeTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                />
            </div>
        </Sider>
    );
}
export default SideBar;
