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
import SideBar from './SideBar';
import Header from './Header';
import "antd/dist/antd.css";
import './index.css'
import Footer from './Footer'

const { Sider, Content } = Layout;

const App = (props) => {
    const [collapsed, setCollapsed] = useState(false)
    const [theme, setTheme] = useState("dark")

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const changeTheme = () => {
        setTheme(theme == "dark" ? "light" : "dark");
    }

    return (
        <Layout>
            <SideBar theme={theme}  changeTheme={changeTheme} collapsed={collapsed} />
            <Layout className="site-layout ant-layout-container">
                <Header collapsed={collapsed} toggle={toggle} />
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
}
export default App;
