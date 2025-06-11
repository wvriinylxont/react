import React, { useState } from "react";
import { deleteComment, writeComment } from "../utils/postApi";
import { mutate } from "swr";

function useComment() {
  const [value, setValue] = useState("");
  const [message, setMessge] = useState("");

  const onChange = (e) => setValue(e.target.value);

  const onBlur = () => {
    setMessge("");
    if (value != "") 
        return true;
    setMessge("필수입력입니다");
    return false;
  };

  // useSWR 캐시는 읽어온 글을 이름과 키로 구별한다 -> ['posts']
  const update = (pno, newComments) => {
    mutate(['post', pno], (prev) => {
        // prev가 서버에 읽어온 post. !post라는 말은 post가 비어있다는 뜻 -> 아직 post가 서버에서 도착하지 않았다면면
        if(!prev)
            return prev;
        return {...prev, comments:newComments};
    }, false);
    // false : mutate로 값을 갱신시키면 swr은 서버와 통신해서 값을 갱신하다 -> 그 작업을 하지마라
    // mutate로 SWR 캐시를 수동갱신 -> 그 다음은 SWR은 서버와 통신해서 실제값으로 갱신한다(낙관적 갱신)
    // 낙관적 갱신은 false로 비활성화
  }

  const onWrite = async (pno) => {
    const result = onBlur();
    if (!result) 
        return;
    const requestForm = { pno: pno, content: value };
    try {
      const response = await writeComment(requestForm);
      // onWrite는 댓글 작성 컴포넌트에서 실행 -> 댓글들 리턴 -> CommentList 컴포넌트가 갱신
      update(pno, response.data);
      setValue('');
    } catch(err) {
        console.log(err);
    }
  };

  const onDelete = async(cno, pno) => {
    try {
        const response = await deleteComment(cno, pno);
        update(pno, response.data);
    } catch(err) {
        console.log(err);
    }
  }
  return {value, message, onBlur, onChange, onWrite, onDelete};
}

export default useComment;
