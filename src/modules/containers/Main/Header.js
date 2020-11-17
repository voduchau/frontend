import React, { useState, Fragment } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import avatar from '../../../assets/images/avatar.png';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    SettingOutlined,
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
    const handleClickMenu = e => {
        e.key === 'SignOut' && this.props.onSignOut()
    }
    return (
        <Layout.Header  
            className="header-container"
        >
            <div>
                {/* {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: "trigger",
                    onClick: props.toggle,
                })} */}
            </div>
            <div className="header-menu-right">
                <Badge count={3} dot>
                    <NotificationOutlined style={{ fontSize: '20px' }} />
                </Badge>
                <Menu className="menu-right-language" onClick={handleChangeLanguage} selectedKeys={[currentLanguage]} mode="horizontal">
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
                <Menu className="menu-right-user" key="user" mode="horizontal" onClick={handleClickMenu}>
                    <SubMenu title={
                        <Fragment>
                            <span style={{ color: '#999', marginRight: 4 }}>
                                Hi,
                                </span>
                            <span>hunghaubmt</span>
                            <Avatar style={{ marginLeft: 8 }} src={avatar} />
                        </Fragment>
                    }
                    >
                        <Menu.Item key="SignOut">
                            Sign out
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        </Layout.Header>
    );
}

export default Header;
