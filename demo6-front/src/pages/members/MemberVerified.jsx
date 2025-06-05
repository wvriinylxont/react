import React from "react";
import { Alert } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";

// /member/verifies?result=값
function MemberVerified() {
  const [serachParams] = useSearchParams();
  const result = serachParams.get("result");

  if (result) {
    return (
      <>
        <Alert variant="success">이메일 인증이 완료되었습니다</Alert>
        <Link to="/member/login">로그인으로</Link>
      </>
    )
  }
  return (
    <>
      <Alert variant="danger">인증이 실패했습니다. 이미 인증되었거나 잘못된 링크입니다</Alert>
    </>
  )
}

export default MemberVerified;
