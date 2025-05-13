import React from 'react'

// JSX 내부에서는 for 문을 사용 x → 출력할 값들을 담은 배열들을 생성한 다음 map 을 돌린다

function App12() {
  const start = 1;
  const end = 5;
  const pagination = [];
  for(let i=start; i<=end; i++)
    pagination.push(i);
  return (
    <ul>
      {
        pagination.map(page=><li>{page}</li>)
      }
    </ul>
  )
}

export default App12