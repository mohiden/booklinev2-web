import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LoginInput, useLoginMutation } from "@generated";
import { useStore } from "@store";

//  TODOS:
//show error if found
export const Login = () => {
  const [logIn, { data, error, loading }] = useLoginMutation();
  const { setAuthValue } = useStore();

  // on form Submit
  const onFinish = async (values: LoginInput) => {
    // console.log("Received values of form: ", values);
    try {
      const res = await logIn({
        variables: {
          input: values,
        },
      });
      if (res.data?.login && data?.login && !error) {
        console.log("LOGGED IN");
        console.log(data.login);
        setAuthValue(data?.login);
        window.location.assign("/app");
        return;
      }
    } catch (e: any) {
      console.log(e.message);
    }
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
          {error && <p>{error.message}</p>}
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
