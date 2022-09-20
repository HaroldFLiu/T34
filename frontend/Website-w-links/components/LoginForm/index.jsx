import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./LoginForm.css";
import { useHistory } from "react-router-dom";


import axios from "../../api/axios";

// to collect the input data 
const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPass: false,
  });

  console.log(values);
  // function to add password visibility later if wanted
  const handlePasswordVis = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  }

  async function PostLogin(){
    axios.post('/login', {
    email: values.email,
    password: values.password,
  })
  .then(function (response) {
    //console.log(response);
    if (response.status=="200") {
      location.pathname='home-page';
    }
    else {
      console.log("oops");
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}
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
          <Antd.Input 
          placeholder="Username" 
          required
          onChange={(e)=> setValues({...values, email:e.target.value})}
          prefix={<AntDesignIcons.UserOutlined 
          className="site-form-item-icon" />} />
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
            required
            onChange={(e)=> setValues({...values, password:e.target.value})}
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
          <Antd.Button type="primary" htmlType="submit" onClick={PostLogin} style={{ width: "100%" }} className="login-form-button">
            Log in
          </Antd.Button>
          Or <a href="/sign-up-page">register now!</a>
        </Antd.Form.Item>
      </Antd.Form>
    </div>
  );

 }

export default LoginForm;

/*
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
          Or <a href="/sign-up-page">register now!</a>
        </Antd.Form.Item>
      </Antd.Form>
    </div>
  );
}

export default LoginForm;
*/