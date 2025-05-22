import React, { useState } from "react";

// 상태와 함수의 결합 -> 커스텀 훅(각각), Context(전체가 공유)
function useInput(msg) {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const change = (e) => setValue(e.target.value);

  const check = () => {
    setMessage('');
    if (value === "") {
      setMessage(msg);
      return false;
    }
    return true;
  };
  return { value, message, change, check, setValue };
}

export default useInput;
