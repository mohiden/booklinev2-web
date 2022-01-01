import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useMutation } from "react-query";
import { IUser } from "@core";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@stores";
import { Api } from "@api";
import { successMessage } from "@utils";

export const Login = () => {
  const navigate = useNavigate();

  // check if token available auto navigate to /app
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      navigate("/app");
    }
  }, [navigate]);

  const { setAuthValue } = useUserStore();
  const login = useMutation<string, AxiosError, IUser>((data: IUser) =>
    Api.post<string>("user/login", data).then((res) => res.data)
  );

  // on form Submit
  const onFinish = async (values: IUser) => {
    console.log("Received values of form: ", values);
    login.mutate(
      { ...values },
      {
        onSuccess: (token) => {
          setAuthValue(token);
          setTimeout(() => {
            successMessage("Logged in successfully");
          }, 1500);
          window.location.assign("/app");
          // navigate("/app");
        },
      }
    );
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{}} // form item name as its variable to set initial value
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          {login.isError && (
            <p>
              {login.error?.response?.data?.issues
                ? login.error.response.data?.issues[0]?.message
                : login.error.response?.data}
            </p>
          )}
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={login.isLoading}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
