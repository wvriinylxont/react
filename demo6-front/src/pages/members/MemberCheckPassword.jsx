import React, { useState } from "react";
import useMemberStore from "../../stores/usePasswordStore";
import { AsyncStatus } from "../../utils/constant";
import usePassword from "../../hooks/usePassword";
import { Alert } from "react-bootstrap";
import TextField from "../../components/commons/TextField";
import BlockButton from "../../components/commons/BlockButton";
import { checkPassword } from "../../utils/memberApi";
import { Navigate, useNavigate } from "react-router-dom";
import usePasswordStore from "../../stores/usePasswordStore";
import { useStore } from "zustand";

// 비밀번호를 확인한 경우에만 내 정보를 볼 수 있다
// 비밀번호 확인 여부 :
// - MemberCheckPassword 저장
// - MemberRead에서 확인. 확인되지 않은 경우 MemberCheckPassword로 이동
function MemberCheckPassword() {
  const isPasswordVerified = usePasswordStore(
    (state) => state.isPasswordVerified
  );
  const setPasswordVerified = usePasswordStore(
    (state) => state.setPasswordVerified
  );
  const [submittingStatus, setSubmittingStatus] = useState(AsyncStatus.IDLE);
  const vPassword = usePassword();
  const navigate = useNavigate();

  const doCheckPassword = async () => {
    if (submittingStatus == AsyncStatus.SUBITTING) return;
    setSubmittingStatus(AsyncStatus.SUBITTING);

    if (!vPassword.onBlur()) {
      setSubmittingStatus(AsyncStatus.IDLE);
      return;
    }

    try {
      await checkPassword(vPassword.value);
      setPasswordVerified();
      setSubmittingStatus(AsyncStatus.SUCCESS);
      navigate("/member/read");
      return;
    } catch (err) {
      setSubmittingStatus(AsyncStatus.FAIL);
      console.log(err);
    }
  };

  // 조건부 렌더링
  if (isPasswordVerified) return <Navigate to="/member/read" />;
  return (
    <div>
      {submittingStatus === AsyncStatus.FAIL && (
        <Alert variant="danger">비밀번호를 확인하지 못했습니다</Alert>
      )}
      <TextField label="비밀번호" name="password" type="password" {...vPassword} />
      <BlockButton
        label={submittingStatus === AsyncStatus.SUBITTING ? "확인 중" : "확인"}
        onClick={doCheckPassword}
        styleName="primary"
        disabled={submittingStatus === AsyncStatus.SUBITTING}
      />
    </div>
  );
}

export default MemberCheckPassword;
