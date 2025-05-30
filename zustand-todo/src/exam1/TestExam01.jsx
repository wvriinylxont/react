import React, { useEffect, useState } from "react";

const Child = ({count}) => {
  console.log("자식 렌더링");

  useEffect(() => {
    console.log("초기화");
  }, []);

  return <div>{count}</div>;
};

function TestExam01() {
  console.log("부모 렌더링");
  const [count, setCount] = useState(0);

  return (
    <>
    <Child count={count} />
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <Child />
    </>
  );
}

// 컴포넌트는 언제 재렌더링되는가 ?
// - 상태가 변경되면
// - 컴포넌트는 UI를 담당하므로 출력할 상태가 되면, 당연히 재렌더링이 되야한다

// 자식 컴포넌트는 언제 재렌더링되는가 ?
// 1. 부모가 전달한 props가 변경되면 당연히 재렌더링되야한다

export default TestExam01;
