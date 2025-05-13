import React from 'react'

function App11() {
  const shinee = [
    // 자바스크립트 객체는 마지막에 , 있어도 상관 없음
    {name:'온유', role:'리더', birthday:'1989-12-14', isLeader:true},
    {name:'KEY', role:'보컬', birthday:'1991-09-23'},
    {name:'민호', role:'메인래퍼', birthday:'1991-12-09'},
    {name:'태민', role:'메인댄서', birthday:'1993-07-18'},
  ]
  return (
    <table>
      {/* 이름, 역할, 생일을 테이블로 출력하고 리더인 경우 이름을 특별한 색으로 */}
      <thead>
        <tr>
          <th>이름</th>
          <th>포지션</th>
          <th>생일</th>
        </tr>
      </thead>
      <tbody>
        {
          shinee.map(m=>{
            return (
              <tr>
                <td style={{color:m.isLeader? 'gold':'black'}}>{m.name}</td>
                <td>{m.role}</td>
                <td>{m.birthday}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default App11