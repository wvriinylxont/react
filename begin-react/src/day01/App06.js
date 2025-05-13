import React from 'react'

function Hello(props) {
  // 이름과 나이를 받아서 나이가 20살 이상이면 파랑, 미만이면 빨강
  // if 문은 우변값으로 올 수 없기에 style 에 올 수가 없다
  const {name, nai} = props;
  return (
    <div style={{color:props.nai>=20? 'blue':'red'}}>
      {name}
    </div>
  )
}



function App06() {
  return (
    <div>
      <Hello name="심우준" nai="30" />
      <Hello name="정우주" nai="19" />
    </div>
  )
}

export default App06