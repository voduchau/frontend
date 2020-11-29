import React, { useState } from 'react';
import { Layout, Menu, Switch } from 'antd';
import Media, { useMedia } from 'react-media';
import {
    HomeOutlined,
    BulbOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    EnvironmentOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo.png';
import { useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const SideBar = (props) => {
    let location = useLocation();
    const {
        theme,
        collapsed,
        changeTheme,
        matches,
        setCollapsed,
        collapsedWidth
    } = props;

    return (
        <Sider
            width={210}
            breakpoint="md"
            trigger={null}
            theme={theme}
            // collapsedWidth={matches.small ? collapsedWidth && collapsedWidth}
            onBreakpoint={broken => {
                setCollapsed(broken)
            }}
            className="antd-sider-container"
            collapsible
            collapsed={matches.small ? false : collapsed}
        >
            <div className="logo-sidebar">
                <img src={logo} alt="logo-sider" />
            </div>
            <Menu className="ant-menu-sider" theme={theme} mode="inline" defaultSelectedKeys={[location.pathname]}>
                <Menu.Item key="/home" icon={<HomeOutlined />}>
                    <Link to="/home">
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="/user" icon={<UserOutlined />}>
                    <Link to="/user">
                        User
                    </Link>
                </Menu.Item>
                <Menu.Item key="/player" icon={<VideoCameraOutlined />}>
                    Player
                </Menu.Item>
                <Menu.Item key="/upload" icon={<UploadOutlined />}>
                    Upload
                </Menu.Item>
                <Menu.SubMenu key="sub1" title="Location" icon={<EnvironmentOutlined />} >
                    <Menu.Item key="4">Quận 1</Menu.Item>
                    <Menu.Item key="5">Quận 2</Menu.Item>
                </Menu.SubMenu>
            </Menu>
            <div className="swithTheme">
                {
                    !collapsed ?
                        <>
                            <BulbOutlined />
                            <span>Swith theme</span>
                        </>
                        : null

                }
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
