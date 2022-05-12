import React from 'react';
import {Layout, Form, Input, Button, Checkbox } from 'antd'
import './Login.css';
import { layout, tailLayout } from './config';


const Login = () => {
  const { Header, Footer, Content } = Layout;
  
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

  return (
    <>
      <Layout className="login">
        <Header className="header">
          <h1>doubleyong 后台管理系统</h1>
        </Header>
        <Content className="content">
          <div className="frmLogin">
            <h2>登录</h2>
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入密码!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>记住密码</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Footer className="footer">
          <p>copyright 2021.6</p>
        </Footer>
      </Layout>
    </>
  );
};

export default Login;
