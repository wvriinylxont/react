import React from 'react'

function Idol({group, name}) {
  return (
    <div style={{backgroundColor:'black', color:'white'}}>
      {group}의 멤버 : {name}
    </div>
  )
}


function App10() {
  const shinee = ["온유", "KEY", "민호", "태민"];
  return (
    <div>
      <ul>
        {
          /* 
          자바스크립트는 중괄호로 작성
          한 줄로 적을 때는 return, 중괄호 모두 생략
          부모에서 자식만 내려줄 수 있지 자식에서 부모로 올라갈 수는 없음
          단방향 통신이기 때문
          */
        }
        {
          shinee.map(m=>{
            return <li>{m}</li>
          })
        }
      </ul>
      <div>
        {
          shinee.map(m=><Idol group="샤이니" name={m} />)
        }
      </div>
    </div>
  )
}

export default App10