import React, { useState } from 'react'

/*
  객체를 구조분해할당 할 때는 변수 이름이 정해져 있다
  const obj = {name:'홍길동', nickname:'서자'};
  const {name, nickname} = obj;

  배열을 구조분해할당 할 때는 이름은 개발자 마음대로
  const ar = [10, 20];
  const [첫번째, second] = ar;
*/

function Counter() {
  const [count, setCount] = useState(0);
  
  // setCount 로 업데이트 (일반 업데이트)
  // 상태가 최신 상태라는 보장이 없다
  const inc=()=>setCount(count+1);

  // 함수형 업데이트 : setter 의 파라미터로 화살표 함수를 적는다
  // 함수형 업데이트할 때 화살표 함수의 파라미터는 상태의 이전 값
  // 가능한한 함수형 업데이트를 권장
  const dec=()=>setCount(이전값=>이전값-1);
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

export default Counter