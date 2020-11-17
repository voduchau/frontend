import React from 'react';
import { Layout, Menu, Switch } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import "antd/dist/antd.css";
// const { Header } = Layout;

const Header = (props) => {
    return (
        <Layout.Header className="header-container">
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: "trigger",
                onClick: props.toggle,
            })}
        </Layout.Header>
    );
}

export default Header;
