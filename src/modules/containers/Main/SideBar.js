import React, { useState } from 'react';
import { Layout, Menu, Switch } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import logo from '../../../assets/images/logo.png';

const { Header, Sider, Content } = Layout;

const SideBar = (props) => {

    return (
        <Sider theme={props.theme} trigger={null} collapsible collapsed={props.collapsed}>
            <div className="logo-sidebar">
                <img src={logo} alt="logo-sider" />
                {/* {!props.collapsed ? <span>Admin - Dashboard</span> : ""} */}
            </div>
            <Menu theme={props.theme} mode="inline" defaultSelectedKeys={['1']}>
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
                    <Menu.Item key="4">Option 7</Menu.Item>
                    <Menu.Item key="5">Option 8</Menu.Item>
                </Menu.SubMenu>
                <div className="swithTheme">
                    <Switch
                        checked={props.theme === 'dark'}
                        onChange={props.changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />
                </div>
            </Menu>
        </Sider>
    );
}
export default SideBar;
