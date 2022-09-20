import { useAuth } from "context/auth-context";
// import React, { FormEvent } from "react";
import { Form, Input } from "antd";
import { LongButton } from "unauthenticated-app";

// const apiUrl = process.env.REACT_APP_API_URL;

// const login = (param: { username: string; password: string }) => {
//   fetch(`${apiUrl}/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(param),
//   }).then(async (response: Response) => {
//     if (response.ok) {
//     }
//   });
// };

export const LoginScreen = () => {
  const { login } = useAuth();
  const handelSubmit = (values: { username: string; password: string }) => {
    // e.preventDefault();
    // const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    // const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    // console.log(username, password);
    login(values);
  };

  return (
    <Form onFinish={handelSubmit}>
      {/* {user ? (
        <div>
          登录成功， 用户名 {user?.name} token: {user?.token}
        </div>
      ) : null} */}
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" type="text" id="username" />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="密码" type="password" id="password" />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType={"submit"} type="primary">
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};
