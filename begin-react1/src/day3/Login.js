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
};

function Login() {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const onChange = (e) => {
    const { name, value } = e.target;
    // UI 변경은 리액트 -> 리액트가 데이터 변경을 눈치챌 수 있게 코딩 -> 객체나 배열의 경우 값 변경이 아닌 새로운 객체
    // 반드시 새로운 객체가 만들어져야한다
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
    if (r1 && r2) alert("로그인합니다");
    else alert("로그인 실패");
  };

  // 왜 여기다 찍었나 ? useState의 동기는 비동기처리 !!!!!!!!!
  // 그런데 상태가 update되면 컴포넌트를 다시 출력한다
  console.log(loginForm);
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
        <button className="btn btn-primary" onClick={doLogin}>
          로그인
        </button>
      </div>
    </div>
  );
}

export default Login;
