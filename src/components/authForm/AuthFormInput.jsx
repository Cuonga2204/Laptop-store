import React from "react";

export default function AuthFormInput({ placeholder, type, value, onChange }) {
  return (
    <div className="auth-form__group">
      <input
        type={type}
        className="auth-form__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="new-password"
      />
    </div>
  );
}
