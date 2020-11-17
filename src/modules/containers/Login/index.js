import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button, Radio, Row, Col, Checkbox } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { login_pending, login_success, login_error } from '@actions/auth';
import api from "@api"
import "antd/dist/antd.css";
import './index.css'
import logo from '../../../assets/images/logo.png'

const Login = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch()


    const handleLogin = values => {
        setLoading(true);
        dispatch(login_pending())

        api.post('/user/login', {
            username: values.username,
            password: values.password,
        }).then(res => {
            dispatch(login_success(res.data))
        }).catch(err => {
            dispatch(login_error("login failed"))
        })

        form.validateFields().then(value => {
            console.log(value)
        })

    };
    const onFinishFailed = () => {
        form.scrollToField(errorFields[0].name);
    }


    return (
        <div className="login-row" type="flex" justify="space-around" align="middle">
            <div className="login-logo">
                <img src={logo} alt="logo" />
                <span className="login-text">Admin</span>
            </div>
            <Form
                layout="horizontal"
                className="login-form"
                form={form}
                onFinish={handleLogin}
                // initialValues={{ layout: formLayout }}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please enter your Username!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please enter your Password!' }]}
                >
                    <Input.Password
                        placeholder="password"
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Form.Item>
                <Form.Item className="login-remember">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>
                <Row>
                    <Button
                        type="primary"
                        htmlType="submit"
                    // loading={}
                    >
                        Log in
                    </Button>
                </Row>
            </Form>
        </div>
    );
};
export default Login;
