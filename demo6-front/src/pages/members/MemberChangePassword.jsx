import React, { useState } from 'react'
import TextField from '../../components/commons/TextField'
import usePassword from '../../hooks/usePassword'
import useConfirmPassword from '../../hooks/useConfirmPassword'
import BlockButton from '../../components/commons/BlockButton';
import { AsyncStatus } from '../../utils/constant';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../utils/memberApi';

function MemberChangePassword() {
  // 1. 필요한 기능들(작성상태, 비밀번호/새비밀번호/새비밀번호 확인 훅)
  const [status, setStatus] = useState(AsyncStatus.IDLE);
  const vCurrentPassword = usePassword();
  const vNewPassword = usePassword();
  const vConfirmPassword = useConfirmPassword(vNewPassword);
  const navigate = useNavigate();

  const doChangePassword = async() => {
    if(status===AsyncStatus.SUBITTING) return;
    setStatus(AsyncStatus.SUBITTING);

    const r1 = vCurrentPassword.onBlur();
    const r2 = vNewPassword.onBlur();
    const r3 = vConfirmPassword.onBlur();

    if(!(r1 && r2 && r3)) {
      setStatus(AsyncStatus.IDLE);
      return;
    }

    try {
      const requestForm = {currentPassword:vCurrentPassword.value, newPassword:vNewPassword.value};
      await changePassword(requestForm);
      setStatus(AsyncStatus.SUCCESS);
      alert('비밀번호를 변경했습니다');
      navigate("/");
    } catch(err) {
      setStatus(AsyncStatus.FAIL);
      vCurrentPassword.reset();
      vNewPassword.reset();
      vConfirmPassword.reset();
    }
  }

    return (
    <div>
      <div style={{height:400}}>
        <TextField label='기존 비밀번호' type='password' {...vCurrentPassword} />
        <TextField label='새 비밀번호' type='password' {...vNewPassword} />
        <TextField label='새 비밀번호 확인' type='password' {...vConfirmPassword} />
        {status===AsyncStatus.FAIL && <Alert variant='danger'>비밀번호를 변경하지 못했습니다</Alert>}
      </div>
      <BlockButton label={status===AsyncStatus.SUBITTING?"변경 중":"비밀번호 변경"} styleName='dark' onClick={doChangePassword} disabled={status===AsyncStatus.SUBITTING} />
    </div>
  )
}

export default MemberChangePassword