import React, { useState } from 'react'
import 'react-quill-new/dist/quill.snow.css'
import './PostWrite.css'
import ReactQuill from 'react-quill-new'
import TextField from '../../components/commons/TextField';
import BlockButton from '../../components/commons/BlockButton';
import useInput from '../../hooks/useInput';
import { AsyncStatus, modules } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';
import { write } from '../../utils/postApi';

function PostWrite() {
  const [content, setContent] = useState('');
  const [status, setStatus] = useState(AsyncStatus.IDLE);
  const vTitle = useInput();
  const navigate = useNavigate();

  // 파생속성
  const isSubmitting = status===AsyncStatus.SUBITTING;

  const doWrite = async() => {
    if(isSubmitting) return;
    setStatus(AsyncStatus.SUBITTING);

    if(!(vTitle.onBlur())) {
      setStatus(AsyncStatus.IDLE);
      return;
    }
    try {
      const requestForm = {title:vTitle.value, content:content};
      const response = await write(requestForm);
      setStatus(AsyncStatus.SUCCESS);
      navigate(`/post/read?pno=${response.data.pno}`);
    } catch(err) {
      setStatus(AsyncStatus.FAIL);
    }
  }

  return (
    <div>
      <TextField label='제목' name='title' {...vTitle} />
      <ReactQuill modules={modules} theme='snow' name='content' value={content} onChange={value=>setContent(value)} />
      <BlockButton label='글 작성' onClick={doWrite} styleName='primary' />
    </div>
  )
}

export default PostWrite