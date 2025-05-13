import React, { useState } from 'react'

// useState 를 사용하려면 import 에 { useState } 넣어주기!

// 아래와 같이 a,b 를 a,b 가 리턴하는 함수가 만들어질 수 있다
// 함수를 리턴하는 함수 : 고차 함수 (high-order finction)
function 계산기(choice) {
  if(choice=='덧셈') {
    return function (a, b) {
      return a+b;
    }
  } else if(choice=='뺄셈') {
    return function (a, b) {
      return a-b;
    }
  }
}

function App022() {

  // JS 에서 함수는 "변수가 올 수 있는 모든 곳"에 올 수 있다
  // 함수가 파라미터가 될 수도 있고, 함수를 리턴할 수도 있다

  // useState 훅을 이용해서 상태와 상태를 변경하는 함수를 얻어온다
  
  // const [상태, 상태변경함수] = useState(초기값);
  const [count, setCount] = useState(0);
  // 이렇게 하면 first, second 에 11, 20 이 들어간다
  // const ar= [11, 20];
  // const [first, second] = ar;

  const inc=()=> setCount(count+1);
  const dec=()=> setCount(count-1);

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>
    </div>
  )
}

export default App022