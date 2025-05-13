import React from 'react'


// 조건부 렌더링
// - 서버에서 값을 받아와서 출력하는 경우

function App09() {
  // 서버에서 값 받는 코드 : axios.get()~~~
    // 오래 걸리기 때문에 리턴이 먼저 걸려 값이 먼저 출력됨
    // 그러면 값이 나오지 않음
  // function 내 주석
  // let todos = null;
  // if(todos==null)
  //   return;
  const a=10, b=20;
  return (
    /* return 내 주석 */
    <div>
      <div>
        {a+b}
      </div>
      <div>
        {/* 앞이 false 면 뒤가 출력되지 않음 */}
        {a>=100 && "a 가 100 이상입니다"}
      </div>
      <div>
        {/* 그래서 앞에를 true 로 만들어줘야함. 삼항연산자를 써도 돼고 && 를 사용해도 됨 */}
        {a>=10 && "a 가 10 이상입니다"}
      </div>
      <div>
        {
          /* JSX 표현식은 객체 자료형을 지원하지 않는다 */
        }
        {/* {obj} */}
      </div>
    </div>
  )
}

export default App09