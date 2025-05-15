import React, { useState } from "react";

function Update() {
  const [count, setCount] = useState(0);

  const update1 = () => {
    // setCount는 비동기 처리된다
    // 두번째 setCount가 실행될 때 count가 1증가된 값이 아니다
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const 함수형update=()=> {
    // setter 내부에 값이 아니라 함수를 준다
    // 이때 함수의 파라미터는 최신 상태
    setCount((prev)=>{return prev+1})
    setCount(prev=>prev+1);
    setCount(prev=>prev+1);
  }

  return (
    <div>
      {count}
      <div>
        <button onClick={update1}>일반 업데이트</button>
        <button onClick={함수형update}>함수형 업데이트</button>
      </div>
    </div>
  );
}

export default Update;
