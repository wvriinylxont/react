import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    // 로딩 빙글뱅글 도는거
    <div className="d-flex justify-content-center align-items-center" style={{height:'600px'}}>
      <Spinner animation="border" role="status" />
    </div>
  );
}

export default Loading;
