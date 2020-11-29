import React, { useEffect, useState } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import avatar from '../../../assets/images/avatar.png';
import Media from 'react-media';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    NotificationOutlined,
} from '@ant-design/icons';
import "antd/dist/antd.css";
import { Badge } from 'antd';
import us from '../../../assets/images/us.png'
import vietnam from '../../../assets/images/vietnam.png'
import { useTranslation } from 'react-i18next';

const { SubMenu } = Menu;

const DataLanguage = [
    { name: "Việt Nam", src: vietnam, key: "vi" },
    { name: "English", src: us, key: "en" }
]

const Header = (props) => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState("vi");
    const [currentLanguageSrc, setCurrentLanguageSrc] = useState(vietnam)

    const {
        history,
        collapsed,
        toggle,
        showDrawer,
        matches
    } = props;

    useEffect(() => {
        if (localStorage.getItem("lang")) {
            const lang = localStorage.getItem("lang");
            setCurrentLanguage(lang)
            if(lang == "en"){
                setCurrentLanguageSrc(us)
            }
            else {
                setCurrentLanguageSrc(vietnam)
            }
        }
    }, [])

    const handleChangeLanguage = (e) => {
        setCurrentLanguage(e.key);
        i18n.changeLanguage(e.key);
        localStorage.setItem("lang", e.key)
        if (e.key == "en") {
            setCurrentLanguageSrc(us)
        }
        else {
            setCurrentLanguageSrc(vietnam)
        }
    }
    const handleClickMenu = e => { }

    const handleSignOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        history.replace("/login");
    }

    const rightContent = [
        <Menu
            className="menu-right-user"
            key="user"
            mode="horizontal"
            onClick={handleClickMenu}
        >
            <SubMenu title={
                <>
                    <span style={{ color: '#999', marginRight: 4 }}>
                        {t("hi")},
                    </span>
                    <span>hunghaubmt</span>
                    <Avatar style={{ marginLeft: 8 }} src={avatar} />
                </>
            }
            >
                <Menu.Item key="SignOut">
                    <a onClick={handleSignOut}>{t("sign_out")}</a>
                </Menu.Item>
                <Menu.Item key="Setting">
                    {t("setting")}
                </Menu.Item>
            </SubMenu>
        </Menu>
    ]

    rightContent.unshift(
        <Menu
            className="menu-right-language"
            onClick={handleChangeLanguage}
            selectedKeys={[currentLanguage]}
            key="language"
            mode="horizontal"
        >
            <SubMenu key="SubMenu" title={<Avatar src={currentLanguageSrc} size="small" />}>
                {
                    DataLanguage.map((item, index) => (
                        <Menu.Item key={item.key}>
                            <Avatar src={item.src} style={{ marginRight: 8 }} />
                            {item.name}
                        </Menu.Item>
                    ))
                }
            </SubMenu>
        </Menu>
    )

    rightContent.unshift(
        <Badge
            count={3}
            dot
            key="notification"
        >
            <NotificationOutlined style={{ fontSize: '20px' }} />
        </Badge>
    )


    return (
        <Layout.Header
            className="header-container"
        >
            <Media
                query="(min-width: 992px)"
                render={() =>
                    (
                        <div className="large-header">
                            <div>
                                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: "trigger",
                                    onClick: toggle,
                                })}
                            </div>
                            <div className="header-menu-right">
                                {rightContent}
                            </div>
                        </div>
                    )}
            />
            <Media
                query="(max-width: 991px)"
                render={() =>
                    (
                        <div className="small-header">
                            <div className="btn-collap-menu">
                                {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: "trigger",
                                    onClick: matches.small ? showDrawer : toggle,
                                })}
                            </div>
                            <div className="header-menu-right ml-5">
                                {rightContent}
                            </div>
                        </div>
                    )}
            />
        </Layout.Header>
    );
}

export default Header;
