import React, { useState, useEffect } from 'react';
import { Layout, Spin } from 'antd';
import {
    LoadingOutlined
} from '@ant-design/icons';
import SideBar from './SideBar';
import Header from './Header';
import "antd/dist/antd.css";
import './index.css'
import Footer from './Footer'

const { Sider, Content } = Layout;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const App = (props) => {
    const [collapsed, setCollapsed] = useState(false)
    const [theme, setTheme] = useState("light")
    const [loading, setLoading] = useState(true)

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        }, 1500)
    },[])

    const changeTheme = () => {
        setTheme(theme == "dark" ? "light" : "dark");
    }

    return (
        <Layout>
            <Spin spinning={loading} indicator={antIcon}>
                <SideBar theme={theme} changeTheme={changeTheme} collapsed={collapsed} />
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
            </Spin>
        </Layout>
    );
}
export default App;
