import React, { useState } from "react";
import TextField from "../../components/commons/TextField";
import useUsername from "../../hooks/useUsername";
import usePassword from "../../hooks/usePassword";
import { AsyncStatus } from "../../utils/constant";
import { login } from "../../utils/memberApi";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import BlockButton from "../../components/commons/BlockButton";
import useAuthStore from "../../stores/useAuthStore";

function MemberLogin() {
    const vUsername = useUsername();
    const vPassword = usePassword();
    const [submittingStatus, setSubmittingStatus] = useState(AsyncStatus.IDLE);
    const navigate = useNavigate();
    const setUsername = useAuthStore(state=>state.setUsername);

    const doLogin = async() => {
        setSubmittingStatus(AsyncStatus.SUBITTING);
        const r1 = vUsername.onBlur();
        const r2 = vPassword.onBlur();
        if((!r1 && r2)) {
            setSubmittingStatus(AsyncStatus.IDLE);
            return;
        }

        try {
            const params = {username:vUsername.value, password:vPassword.value};
            await login(params)
            // 로그인 성공하면 store에 아이디를 기록한 다음 /로 이동
            setSubmittingStatus(AsyncStatus.SUCCESS);
            setUsername(vUsername.value);
            navigate("/");
            return;
        } catch(err) {
            setSubmittingStatus(AsyncStatus.FAIL);
            console.log(err);
        }
    }

  return (
    <div>
        {submittingStatus===AsyncStatus.FAIL && <Alert variant="danger">아이디나 비밀번호를 확인하세요</Alert>}
      <TextField label="아이디" name="username" {...vUsername} />
      <TextField label="비밀번호" name="password" type="password" {...vPassword} />
      <BlockButton label={submittingStatus===AsyncStatus.SUBITTING? "로그인 처리중":"로그인"} styleName="dark" onClick={doLogin} disabled={submittingStatus===AsyncStatus.SUBITTING} />
    </div>
  );
}

export default MemberLogin;
