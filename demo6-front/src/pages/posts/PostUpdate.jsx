import React, { useEffect, useState } from "react";
import { AsyncStatus, modules } from "../../utils/constant";
import useInput from "../../hooks/useInput";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import useSWR from "swr";
import { read, update } from "../../utils/postApi";
import LoadingSpinner from "../../components/commons/LoadingSpinner";
import { Alert } from "react-bootstrap";
import useAuthStore from "../../stores/useAuthStore";
import TextField from "../../components/commons/TextField";
import ReactQuill from "react-quill-new";
import BlockButton from "../../components/commons/BlockButton";

function PostUpdate() {
  // 1. 필요한 기능
  const [status, setStatus] = useState(AsyncStatus.IDLE);
  const vTitle = useInput();
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const username = useAuthStore(state => state.username);

  // 2. pno꺼내서 읽어오기
  const [params] = useSearchParams();
  const pno = parseInt(params.get("pno"));
  const { data, error, isLoading } = useSWR(["post", pno], () => read(pno));

  const isSubmitting = status===AsyncStatus.SUBITTING;

  useEffect(()=>{
    // 의존성 배열 []만 주면 처음에 한번만 실행된다 -> 이때 data는 null
    // 서버에서 데이터를 읽어온 다음 출력하려면 의존성 배열에 [data]라고 지정해야 한다
    // [data]라고 지정하면 1.data가 null 2. data가 도착.. 이렇게 useEffect가 2번 실행된다
    // 여기서 data가 null일때 data.title, data.content처럼 접근하는 걸 막아야한다
    if(data) {
    vTitle.setValue(data.title);
    setContent(data.content);
    }
  }, [data]);

  const doUpdate=async()=>{
    if(isSubmitting) return;
        setStatus(AsyncStatus.SUBITTING);
    
        if(!(vTitle.onBlur())) {
          setStatus(AsyncStatus.IDLE);
          return;
        }
        try {
          const requestForm = {title:vTitle.value, content:content, pno:pno};
          await update(requestForm);
          navigate(`/post/read?pno=${pno}`);
          setStatus(AsyncStatus.SUCCESS);
        } catch(err) {
          setStatus(AsyncStatus.FAIL);
        }
  }

  // 조건부 렌더링 : 잘못된 글 번호, 로딩중, 읽기 실패, 글 작성자가 아닐 때
  if (!pno) return <Navigate to="/" />;
  if (isLoading) return <LoadingSpinner />;
  if (error) return <Alert variant="danger">글을 찾을 수 없습니다</Alert>;
  if (data.writer !== username) return <Navigate to="/" />;

  return (
    <div>
      <TextField label='제목' name='title' {...vTitle} />
      <ReactQuill modules={modules} theme='snow' name='content' value={content} onChange={value=>setContent(value)} />
      <BlockButton label={isSubmitting? "변경 중":"글 변경"} onClick={doUpdate} styleName='primary' disabled={isSubmitting} />
    </div>
  )
}

export default PostUpdate;
