import React from "react";
import AuthHeader from "./AuthHeader";
import { Link } from "react-router-dom";
import AuthFormInput from "./AuthFormInput";

export default function AuthContainer({ title, children }) {
  return (
    <div>
      <AuthHeader title={title} />
      {/* {children} */}
      <div className="container-login">
        <div className="modal__body">
          <div className="auth-form">
            <div className="auth-form__container">
              <div className="auth-form__header">
                <h3 className="authen-form__heading">
                  {title === "Đăng ký" ? (
                    <Link to="/signup">Đăng ký</Link>
                  ) : (
                    <Link to="/login">Đăng nhập</Link>
                  )}
                </h3>
              </div>
              <div className="auth-form__form">
                <AuthFormInput placeholder="Nhập email" />
                <AuthFormInput placeholder="Nhập mật khẩu" />
                {title === "Đăng ký" && (
                  <AuthFormInput placeholder="Nhập lại mật khẩu" />
                )}
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
              {title === "Đăng nhập" ? (
                <div className="auth-form__account">
                  <span>Bạn chưa có tài khoản ? </span>
                  <Link to="/signup">Đăng Ký</Link>
                </div>
              ) : (
                <div className="auth-form__account">
                  <span>Bạn đã có tài khoản ? </span>
                  <Link to="/login">Đăng nhập</Link>
                </div>
              )}

              <div className="auth-form__controls">
                <button className="btn auth-form__controls-back btn-normal">
                  Trở lại
                </button>
                {title === "Đăng nhập" ? (
                  <button className="btn btn-primary">Đăng nhập</button>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-primary">Đăng ký</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
