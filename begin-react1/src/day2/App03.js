import React from "react";
import "./App03.css";

// 1장 4. style, className
// 스타일을 지정하는 방법
// 1. 외부 <link rel='stylesheet' href=''> : html과 css 분리
// 2. 내부 <style> : html의 <header>에 작성
// 3. inline <div style=''> : 적용할 태그에 직접
function App03() {
  // 리액트 인라인 스타일은 문자열이 아니라 객체로
  const myStyle = {
    color: "red",
    backgroundColor: "black",
  };

  return (
    <div>
      <p style={myStyle}>빨간색</p>
      <p style={{ color: "blue" }}>파란색</p>
      {/* class가 아니라 className이다 */}
      <p className="green">초록색</p>
    </div>
  );
}

export default App03;
