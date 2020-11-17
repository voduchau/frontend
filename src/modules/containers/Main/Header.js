import React, { useState } from 'react';
import { Layout, Menu, Avatar } from 'antd';
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
    return (
        <Layout.Header className="header-container">
            <div>
                {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: "trigger",
                    onClick: props.toggle,
                })}
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
            </div>
        </Layout.Header>
    );
}

export default Header;
