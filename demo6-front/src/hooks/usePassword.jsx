import React, { useState } from "react";

// 입력 컴포넌트에서 UI와 처리기능을 분리하자 -> 분리된 처리기능은 독립된 js로 만들자
// 그런데 이렇게 독립된 js가 리액트 훅을 사용한다면 -> 커스텀 훅(use~ 형식으로 만든다)
// - 커스텀훅은 함수 형식 + use 어쩌구 이름 + 속성과 기능을 리턴
const pattern = /^[0-9A-Za-z]{6,10}$/;

function usePassword() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const onChange = (e) => setValue(e.target.value);

  // 검증은 input에서 onBlur, 회원가입 버튼 클릭했을 때 실행가능 해야한다
  // <input onBlur={} />는 자기 자신만 검증하면 되지만, 회원가입 버튼을 눌렀을 때는 모든 input을 검증해야한다
  // 그래서 검증 성공 여부를 리턴해줘야 한다
  const onBlur = () => {
    setMessage("");
    if (pattern.test(value)) 
        return true;
    setMessage("비밀번호는 영숫자 6~10자입니다");
    return false;
  };
  
  return { value, message, onChange, onBlur };
}

export default usePassword;
