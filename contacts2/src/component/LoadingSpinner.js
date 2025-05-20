import React from "react";
import { Spinner } from "react-bootstrap";

function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "600px" }}>
      <Spinner animation="border" role="status" />
    </div>
  );
}

export default LoadingSpinner;

/*
  1. 부모에 display(수직가운데 정렬):flex css를 지정하면 자식들을 배치를 조정할 수 있다
  2. 자식들은 기본 행방향으로 배치(수평배치)된다 (flex-direction:row)
  3. 
  <div style='display:flex; justify-content:center(수평가운데 정렬); align-items:center;(수직 가운데 정렬)'>
  line-height(한줄일때만 정렬)
    <div>A</div>
    <div>B</div>
  </div>
*/
