import React, { useState } from "react";
import TextField from "../../components/commons/TextField";
import usePassword from "../../hooks/usePassword";
import useUsername from "../../hooks/useUsername";
import useConfirmPassword from "../../hooks/useConfirmPassword";
import useEmail from "../../hooks/useEmail";
import BlockButton from "../../components/commons/BlockButton";
import useProfile from "../../hooks/useProfile";
import ProfileField from "../../components/members/ProfileFieid";
import { AsyncStatus } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { signup } from "../../utils/memberApi";

// 아이디, 비번, 비번확인, 이메일
function MemberSignup() {
  const [submittingStatus, setSubmittingStatus] = useState(AsyncStatus.IDLE);
  const navigate = useNavigate();

    const vProfile = useProfile();
  const vPassword = usePassword();
  const vUsername = useUsername(true);
  const vConfirmPassword = useConfirmPassword(vPassword);
  const vEmail = useEmail();

  const doSignup=async ()=>{
    setSubmittingStatus(AsyncStatus.SUBITTING);

    const r1 = vUsername.onBlur();
    const r2 = vPassword.onBlur();
    const r3 = vConfirmPassword.onBlur();
    const r4 = vEmail.onBlur();
    if(!(r1 && r2 && r3 && r4)) {
      setSubmittingStatus(AsyncStatus.IDLE);
      return;
    }
    
    const formData = new FormData();
    formData.append('profile', vProfile.value);
    formData.append('username', vUsername.value);
    formData.append('password', vPassword.value);
    formData.append('email', vEmail.value);

    try {
        const response = await signup(formData);
        setSubmittingStatus(AsyncStatus.SUCCESS);
        // navigate가 되도 현재 컴포넌트 렌더링은 계속 된다
        navigate("/member/login");
        return;
    } catch(err) {
      setSubmittingStatus(AsyncStatus.FAIL);
        console.log(err);
    }
  }
  
  return (
    <div>
      {submittingStatus===AsyncStatus.FAIL && <Alert variant="danger">회원 가입에 실패했습니다</Alert>}
      <ProfileField name="profile" label="프로필" onChange={vProfile.onChange} photoUrl={vProfile.photoUrl} />
      <TextField name="username" label="아이디" {...vUsername} />
      <TextField name="password" type="password" label="비밀번호" {...vPassword} />
      <TextField name="password" type="password" label="비밀번호확인" {...vConfirmPassword} />
      <TextField name="email" label="이메일" {...vEmail} />
      {/* 버튼을 클릭하면 버튼을 비활성하고, 글자를 가입처리중으로 바꿔라 */}
      <BlockButton label={submittingStatus===AsyncStatus.SUBITTING? "가입 처리중":"회원 가입"} styleName="dark" onClick={doSignup} disabled={submittingStatus===AsyncStatus.SUBITTING} />
    </div>
  );
}

export default MemberSignup;
