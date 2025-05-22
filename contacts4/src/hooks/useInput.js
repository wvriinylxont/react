import React, { useState } from "react";

// 사용자가 입력한 값을 저장하고 검증
function useInput(msg, initialValue = "") {
  // useInput으로 name, address, tel을 입력사용 => 셋 모두 문자열 => ''로 초기화
  const [value, setValue] = useState(initialValue);
  const [message, setMessage] = useState("");

  const change = (e) => setValue(e.target.value);

  const check = () => {
    if (value === "") {
      setMessage(msg);
      return false;
    }
    return true;
  };
  return { value, message, change, check, setValue };
}

export default useInput;
