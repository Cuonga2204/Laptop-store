import React from "react";

export default function AuthFormInput({ placeholder }) {
  return (
    <div>
      <div className="auth-form__group">
        <input
          type="text"
          className="auth-form__input"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
