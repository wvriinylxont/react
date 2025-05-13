import React from 'react'

// html 에서 스타일을 작성하는 방법
// 1. 외부 css → <link rel='stylesheet' href=''>
// 2. 내부 css → <style></style>
// 3. 인라인 css → <div style='color:red'></div> ← 우선순위 제일 높음

// 리액트에서 외부 css 가져오기
import './App04.css'

// JSX 에서 인라인 css 를 사용할 때는 JS 객체 형태로 상태
// const div = document.getElementById('target);
// div.styles.backgroundColor = 'red';
// 색깔 이름이나 명령어 적을 때 카멜 표기법으로 적어야함

const myStyle = {
  color: 'deeppink',
  backgroundColor:'blue'
}

function App04() {
  return (
    <div>
      <p className='red'>빨강색</p>
      <p className='blue'>파란색</p>
      <p style={myStyle}>나는 인라인 CSS</p>
      {/* 외부 객체 없이 태그에 직접 온라인 스타일을 적용할 경우 */}
      <p style={{color:'green'}}>초록색</p>
    </div>
  )
}

export default App04