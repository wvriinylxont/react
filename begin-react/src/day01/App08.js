import React from 'react'

function Wrapper({children}) {
  const style = {
    border: '2px solid black',
    padding: '16px'
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
}

function Hello({name, color}) {
  return (
    <div style={{color}}>안녕하세요 {name}</div>
  )
}

// 줄바꿈하면 세미콜론이 코드보다 앞으로 나가게 되어 에러가 남
// 자식으로 된 컴포넌트를 넘기려면 props.children 을 사용하면 된다
function App08() {
  return (
    <Wrapper>
      <Hello name="홍길동" color="red" />
      <Hello color="pink"></Hello>
    </Wrapper>
  )
}

export default App08