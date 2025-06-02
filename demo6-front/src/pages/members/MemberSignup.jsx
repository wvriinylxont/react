import React from "react";
import TextField from "../../components/commons/TextField";
import usePassword from "../../hooks/usePassword";
import useUsername from "../../hooks/useUsername";
import useConfirmPassword from "../../hooks/useConfirmPassword";
import useEmail from "../../hooks/useEmail";
import BlockButton from "../../components/commons/BlockButton";
import useProfile from "../../hooks/useProfile";
import ProfileField from "../../components/members/ProfileFieid";
import api from "../../utils/api";

// 아이디, 비번, 비번확인, 이메일
function MemberSignup() {
    const vProfile = useProfile();
  const vPassword = usePassword();
  const vUsername = useUsername();
  const vConfirmPassword = useConfirmPassword(vPassword);
  const vEmail = useEmail();

  const signup=async ()=>{
    const r1 = vUsername.onBlur();
    const r2 = vPassword.onBlur();
    const r3 = vConfirmPassword.onBlur();
    const r4 = vEmail.onBlur();
    if(!(r1 && r2 && r3 && r4))
        return;
    
    const formData = new FormData();
    formData.append('profile', vProfile.value);
    formData.append('username', vUsername.value);
    formData.append('password', vPassword.value);
    formData.append('email', vEmail.value);

    try {
        const response = await api.post("/api/members/new", formData);
        console.log(response);
    } catch(err) {
        console.log(err);
    }
  }
  
  return (
    <div>
      <ProfileField name="profile" label="프로필" onChange={vProfile.onChange} photoUrl={vProfile.photoUrl} />
      <TextField name="username" label="아이디" onChange={vUsername.onChange} onBlur={vUsername.onBlur} message={vUsername.message} />
      <TextField name="password" type="password" label="비밀번호" onChange={vPassword.onChange} onBlur={vPassword.onBlur} message={vPassword.message} />
      <TextField name="password" type="password" label="비밀번호확인" onChange={vConfirmPassword.onChange} onBlur={vConfirmPassword.onBlur} message={vConfirmPassword.message} />
      <TextField name="email" label="이메일" onChange={vEmail.onChange} onBlur={vEmail.onBlur} message={vEmail.message} />
      <BlockButton label="회원가입" styleName="dark" onClick={signup} />
    </div>
  );
}

export default MemberSignup;
