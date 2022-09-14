import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";
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

export const RegisterScreen = () => {
  const { register } = useAuth();
  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    console.log(username, password);
    register({ username, password });
  };

  return (
    <form onSubmit={handelSubmit}>
      <div>
        <label htmlFor="username"> 用户名 </label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id="password" />
      </div>
      <button type="submit"> 注册</button>
    </form>
  );
};
