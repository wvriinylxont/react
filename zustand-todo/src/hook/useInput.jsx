import React, { useState } from "react";

function useInput() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const change = (e) => setValue(e.target.value);

  const check = () => {
    setMessage("");
    if (value != "") return true;
    setMessage("필수입력입니다");
    return false;
  };

  // 여러개를 리턴할 때 {}로 리턴함수도 []로 리턴할 수도 있다
  // 객체로 리턴한 경우에 구조분해할당할 때 반드시 내보낸 이름을 준수해야한다
  // const {value, check} = useInput();
  // 배열로 리턴할 경우 순서를 지켜야하지만 이름은 마음대로다
  // return [value, message, check, change] 이렇게 리턴했다면
  // const [xxx, yyy] = useInput();
  return { value, message, check, change };
}

export default useInput;
