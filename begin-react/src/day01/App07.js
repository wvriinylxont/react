import React from 'react'

// 이름, 나이, 리더 여부를 전달받아 출력하는 <idol> 컴포넌트
// 이름 출력
// 25세 이상이면 이름을 파랑 미만이면 빨강
// 리더면 이름에 배경색 넣기

function Idol(props) {
  console.log(typeof props.leader);
  const {name, nai, leader} = props;
  return (
    <div style={{backgroundColor:leader? 'yellowgreen':'white'}}>
      <span style={{color:nai>=25? 'blue':'red'}}>{name}</span>
    </div>
  )
}

// function Idol(name,nai,leader=false) {
//   console.log(leader);
//   return (
//     <div style={{backgroundColor:leader? 'yellowgreen':'white'}}>
//       <span style={{color:nai>=25? 'blue':'red'}}>{name}</span>
//     </div>
//   )
// }

// 숫자, 불리언 처리할 때는 "" 대신 {} 사용
// return 에 괄호가 한 칸 내려가면 읽어낼 수 없는 값으로 변함 
function App07() {
  return (
    <div>
      <Idol name="MARK" nai={27} leader={true} />
      <Idol name="JENO" nai={26} />
      <Idol name="JISUNG" nai={24} />
      <Idol name="CHENLE" nai={25} />
    </div>
  )
}

export default App07