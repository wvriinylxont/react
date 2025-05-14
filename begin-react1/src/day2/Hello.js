// 리액트 컴포넌트 : css + html + js를 하나의 파일에 담은 사용자 정의 태그
// ES6부터는 모듈 지원
// 파이썬은 py파일이 모듈이 되고, import를 이용해 타인이 작성한 py에 담긴 함수, 객체등을 가져올 수 있었다
// JS 모듈에서는 개발자가 export한 함수나 객체만, 다른사람이 import해서 사용할 수 있다
// 하나만 export할 때 export default 문법을 사용
// 모듈에 작성한 모든 export, import
import React from "react";

function Hello() {
  // 자바스크립트 영역
  return (
    // JSX(react의 독자적인 문법)
    // 1. 태그는 반드시 닫는다
    // 2. 전체를 감싸는 root 태그가 있어야한다
    // 3. <></> 제공 -> div 대신 사용 -> html에서는 나타나지 X
    <>
      <div>
        Hello
        <br />
        <img />
      </div>
      <div>react</div>
    </>
  );
}

export default Hello;
