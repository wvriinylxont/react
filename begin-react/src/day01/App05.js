import React from 'react'

// data의 방향
// react - 부모 → 자식 (prop)
//         부모 ↔ 자식

// props 는 부모에서 자식으로 전달되는 값을 담고 있는 객체
function Hello(props) {
  console.log(props);
  return (
    <div style={{color:props.color}}>
      {props.name} {props.nai}
    </div>
  )
}

function App05() {
  return (
    <div>
      <Hello name="홍길동" nai="20" color="red" />
      <Hello name="심우준" nai="30" color="blue" />
      <Hello name="강백호" nai="25" color="green" />
    </div>
  )
}

export default App05