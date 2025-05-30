import React from 'react'
import useInput from '../hook/useInput';
import InputField from '../hook/InputField';
import TextField from '../hook/TextField';
import { useNavigate } from 'react-router-dom';
import { write } from '../utils/todoApi';

function TodoWrite() {
    const vTitle = useInput();
    const vDeadline = useInput();
    const vMemo = useInput();
    const navigate = useNavigate();

    const dowrite = () =>{
        const r1 = vTitle.check();
        const r2 = vDeadline.check();
        const r3 = vMemo.check();
        if(!(r1 && r2 && r3))
            return;
        const params =  {title:vTitle.value, deadline:vDeadline.value, memo:vMemo.value};
        write(params).then((res)=>navigate(`/read?tno=${res.data.tno}`)).catch(err=>console.log(err));
    }

  return (
    <div>
        <InputField label='할일' name='title' field={vTitle} />
        <InputField label='마감일' name='deadline' field={vDeadline} type='date' />
        <TextField label='메모' name='memo' field={vMemo} />
        <button onClick={dowrite}>작성</button>
    </div>
  )
}

export default TodoWrite