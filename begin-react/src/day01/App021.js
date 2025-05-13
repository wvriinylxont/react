import React from 'react'


// 카운터를 만들어보자
function App021() {
  // 개발자는 데이터를 관리 → 변경되면 리액트가 재rendering 담당 (리액트는 변수값을 추적함)
  // 그렇다면 리액트가 모든 변수값을 다 추적할까? no → 상태로 지정
  let count = 1;
  const dec=()=> {
    count--;
    console.log(count);
  }
  return (
    <div>
      <div>{count}</div>
      <div>
        {/* 
            온클릭의 c 를 대문자로 작성
            함수가 들어가기에 중괄호 사용
            함수 만들 때 화살표 함수 사용
            onClick 에 들어갈 함수를 밖으로 빼도 됨
            onClick 에 들어간 dec 에 괄호를 붙이면 안됨 뒤에 괄호를 붙이면 앞 뒤 상관없이 dec 가 바로 실행됨
            그렇다고 화살표 함수를 하면 반대로 코드가 실행되지 않음
        */}
        <button onClick={()=> {
          count++;
          console.log(count)
        }}>+</button>
        <button onClick={dec}>-</button>
      </div>
    </div>
  )
}

export default App021