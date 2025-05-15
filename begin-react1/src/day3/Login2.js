import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// 아이디와 비밀번호를 입력해 로그인 요청을 보낸다
// 아이디와 비밀번호에 대해 패턴을 검증을 수행, 검증이 실패하면 오류 메시지를 출력한다
const patterns = {
  username: /^[a-z0-9]{6,10}$/,
  password: /^[a-zA-Z0-9]{6,10}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

const messages = {
  username: "아이디는 소문자와 숫자 6~10자입니다",
  password: "비밀번호는 영숫자 6~10자입니다",
  email: "이메일 형식을 올바르게 입력하세요",
};

function Login2() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const verify = (irum) => {
    const pattern = patterns[irum];
    const value = loginForm[irum];
    const message = messages[irum];
    if (pattern.test(value) === false) {
      setErrors((prev) => {
        return { ...prev, [irum]: message };
      });
      return false;
    } else {
      setErrors((prev) => ({ ...prev, [irum]: "" }));
      return true;
    }
  };

  const doLogin = () => {
    const r1 = verify("username");
    const r2 = verify("password");
    const r3 = verify("email");
    if (r1 && r2 && r3) alert("회원가입 합니다");
    else alert("회원가입 실패");
  };

  return (
    <div>
      <div className="mb-3 mt-3">
        <label htmlFor="username" className="form-label">
          아이디:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="아이디 입력"
          name="username"
          onChange={onChange}
          onBlur={() => verify("username")}
        />
        {errors.username !== "" && (
          <span style={{ color: "red" }}>{errors.username}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          비밀번호:
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="비밀번호 입력"
          name="password"
          onChange={onChange}
          onBlur={() => verify("password")}
        />
        {errors["password"] !== "" && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">
          이메일:
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="이메일 입력"
          name="email"
          onChange={onChange}
          onBlur={() => verify("email")}
        />
        {errors["email"] !== "" && (
          <span style={{ color: "red" }}>{errors.email}</span>
        )}
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={doLogin}>
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Login2;
