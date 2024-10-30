import React from "react";
import AuthHeader from "../components/authForm/AuthHeader";
import { Link } from "react-router-dom";
import AuthFormInput from "../components/authForm/AuthFormInput";
import { useState } from "react";

import * as UserService from "../services/UserService";
// import { useMutation } from "@tanstack/react-query";
import { useMutationHooks } from "../hooks/useMutationHooks";
export const Login = () => {
  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  console.log("mutation", mutation);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [listAccount, setListAccount] = useState(DEFAULT_ACCOUNTS);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleLogin = () => {
    mutation.mutate({
      email,
      password,
    });
  };
  return (
    <>
      <AuthHeader title="Đăng nhập"></AuthHeader>
      <form
        className="container-login"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="modal__body">
          <div className="auth-form">
            <div className="auth-form__container">
              <div className="auth-form__header">
                <h3 className="authen-form__heading">
                  <Link to="/login">Đăng nhập</Link>
                </h3>
              </div>

              <div className="auth-form__form">
                <AuthFormInput
                  value={email}
                  placeholder="Nhập email"
                  onChange={handleEmailChange}
                />
                <AuthFormInput
                  type="password"
                  value={password}
                  placeholder="Nhập mật khẩu"
                  onChange={handlePasswordChange}
                  autoComplete="new-password"
                />
              </div>

              <div className="auth-form__aside">
                <p className="auth-form__policy-text">
                  Bằng việc đăng ký, bạn có đồng ý
                  <a href="/" className="auth-form__policy-link">
                    Điều khoản dịch vụ{" "}
                  </a>
                  &
                  <a href="/" className="auth-form__policy-link">
                    Chính sách bảo mật
                  </a>
                </p>
              </div>

              <div className="auth-form__account">
                <span>Bạn chưa có tài khoản ? </span>
                <Link to="/signup">Đăng Ký</Link>
              </div>

              <div className="auth-form__controls">
                <button className="btn auth-form__controls-back btn-normal">
                  Trở lại
                </button>

                <button className="btn btn-primary" onClick={handleLogin}>
                  Đăng nhập
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Login;
