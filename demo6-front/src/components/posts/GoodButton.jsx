import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { AsyncStatus } from "../../utils/constant";
import { mutate } from "swr";
import { good } from "../../utils/postApi";

// UI는 컴포넌트로, 동작은 커스텀훅으로 분리 vs UI와 동작을 단일 컴포넌트
// (아이디, 비밀번호, 이메일...) vs (GoodButton)
function GoodButton({pno, goodCnt}) {
    // 서버로 보내는 작업의 작업 상태를 저장 -> 작업중이라고 글자를 바꿔주거나, 작업중일때 버튼을 다시 클릭하면 재실행을 막아준다
    const [status, setStatus] = useState(AsyncStatus.IDLE);

    const doGood=async()=>{
        if(status===AsyncStatus.SUBITTING) return;
        setStatus(AsyncStatus.SUBITTING);
        try {
            // 글 추천하면 서버는 새로운 주소로 이동
            const response = await good(pno);
            mutate(['post', pno], prev=>{
                if(!prev)
                    return prev;
                return {...prev, goodCnt:response.data};
            })
            setStatus(AsyncStatus.SUCCESS);
        } catch(err) {
            setStatus(AsyncStatus.FAIL);
        }
    }
  return (
    <Button varinat="primary" onClick={doGood} disabled={status===AsyncStatus.SUBITTING}>
      추천<Badge bg="secondary">{goodCnt}</Badge>
    </Button>
  )
}

export default GoodButton;
