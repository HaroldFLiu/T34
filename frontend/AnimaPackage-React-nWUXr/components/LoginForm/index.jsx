import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="login-form">
      <Antd.Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: "500px",
          "--ant-primary-color": "#1890ff",
          "--ant-primary-color-hover": "#40a9ff",
        }}
      >
        <Antd.Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please fill username & password",
            },
          ]}
        >
          <Antd.Input placeholder="Username" prefix={<AntDesignIcons.UserOutlined className="site-form-item-icon" />} />
        </Antd.Form.Item>
        <Antd.Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please fill username & password",
            },
          ]}
        >
          <Antd.Input
            type="password"
            placeholder="Password"
            prefix={<AntDesignIcons.LockOutlined className="site-form-item-icon" />}
          />
        </Antd.Form.Item>
        <Antd.Form.Item>
          <Antd.Form.Item noStyle name="remember" valuePropName="checked">
            <Antd.Checkbox>Remember me</Antd.Checkbox>
          </Antd.Form.Item>

          <a href="javascript:void(0)" style={{ float: "right" }} className="login-form-forgot">
            Forgot password
          </a>
        </Antd.Form.Item>
        <Antd.Form.Item>
          <Antd.Button type="primary" htmlType="submit" style={{ width: "100%" }} className="login-form-button">
            Log in
          </Antd.Button>
          Or <a href="javascript:void(0)">register now!</a>
        </Antd.Form.Item>
      </Antd.Form>
    </div>
  );
}

export default LoginForm;
