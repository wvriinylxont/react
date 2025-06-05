import React, { useState } from 'react'
import { AsyncStatus } from '../../utils/constant'
import useUsername from '../../hooks/useUsername';
import { Alert } from 'react-bootstrap';
import TextField from '../../components/commons/TextField';
import BlockButton from '../../components/commons/BlockButton';
import { findPassword } from '../../utils/memberApi';

function MemberFindPassword() {
    const [submittingStatus, setSubmittingStatus] = useState(AsyncStatus.IDLE);
    const vUsername = useUsername();

    const doFindPassword = async() => {
        if(submittingStatus===AsyncStatus.SUBITTING) return;
        setSubmittingStatus(AsyncStatus.SUBITTING);

        if(!vUsername.onBlur()) {
            setSubmittingStatus(AsyncStatus.IDLE);
            return;
        }
        try {
            await findPassword(vUsername.value);
            setSubmittingStatus(AsyncStatus.SUCCESS);
        } catch(err) {
            console.log(err);
            setSubmittingStatus(AsyncStatus.FAIL);
        }
    }

  return (
    <div>
        <p>&#x2714; 비밀번호의 경우 암호화 저자되어 분실 시 찾아드릴 수 없는 정보입니다</p>
        <p>&#x2714; 본인 확인을 통해 비밀번호를 재설정하실 수 있습니다</p>
        {submittingStatus===AsyncStatus.FAIL && <Alert variant='success'>임시비밀번호를 가입 이메일로 보냈습니다</Alert>}
        {submittingStatus===AsyncStatus.FAIL && <Alert variant='danger'>사용자를 찾을 수 없습니다</Alert>}
        <TextField label="아이디" name="username" {...vUsername} />
        <BlockButton label={submittingStatus===AsyncStatus.SUBITTING? "찾는 중":"비밀번호 찾기"} onClick={doFindPassword} styleName="dark" disabled={submittingStatus===AsyncStatus.SUBITTING} />
    </div>
  )
}

export default MemberFindPassword