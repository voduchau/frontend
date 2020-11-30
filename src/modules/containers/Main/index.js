import React, { useState, useEffect } from 'react';
import { Layout, Spin, Drawer } from 'antd';
import {
    LoadingOutlined
} from '@ant-design/icons';
import { childRoutes } from "@modules/routes";
import SideBar from './SideBar';
import Header from './Header';
import "antd/dist/antd.css";
import './index.css'
import Footer from './Footer'
import { useMedia } from 'react-media';
import { Route } from "react-router-dom";
const { Sider, Content } = Layout;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
};

const App = (props) => {
    const [collapsed, setCollapsed] = useState(false)
    const [theme, setTheme] = useState("light")
    const [loading, setLoading] = useState(false)
    const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

    //drawer
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        console.log('show drawer')
        setVisible(true)
    }

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const changeTheme = () => {
        setTheme(theme == "dark" ? "light" : "dark");
    }

    const onCloseDrawer = () => {
        setVisible(false)
    }

    return (
        <Layout>
            {/* <Spin spinning={loading} indicator={antIcon}> */}
                {
                    matches.small ?
                        <Drawer
                            // title="Basic Drawer"
                            placement="left"
                            closable={false}
                            onClose={onCloseDrawer}
                            visible={visible}
                            className="drawer-sider-container"
                            key="left"
                            width={188}
                        >
                            <SideBar
                                matches={matches}
                                toggle={toggle}
                                theme={theme}
                                collapsedWidth={2}
                                setCollapsed={setCollapsed}
                                changeTheme={changeTheme}
                                collapsed={collapsed}
                            />
                        </Drawer>
                        :
                        <SideBar
                            matches={matches}
                            toggle={toggle}
                            theme={theme}
                            setCollapsed={setCollapsed}
                            changeTheme={changeTheme}
                            collapsed={collapsed}
                        />
                }

                <div className="site-layout ant-layout-container">
                    <Header
                        matches={matches}
                        collapsed={collapsed}
                        toggle={toggle}
                        showDrawer={showDrawer}
                        {...props}
                    />
                    <Content
                        className="site-layout-background"
                        // style={{
                        //     margin: '24px 16px',
                        //     padding: 24,
                        //     minHeight: 280,
                        // }}
                    >
                        <div className="content-container">
                            {childRoutes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    component={route.component}
                                    exact={route.exactly}
                                />
                            ))}
                        </div>
                    </Content>
                    <Footer />
                </div>
            {/* </Spin> */}
        </Layout>
    );
}
export default App;
