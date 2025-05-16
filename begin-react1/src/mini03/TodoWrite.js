import axios from "axios";
import React, { useState } from "react";

function TodoWrite() {
    const [inputs, setInputs] = useState({title:'', deadline:'', memo:''});
    const onChange=(e)=>{
        const {name, value} = e.target;
        setInputs(prev=>({...prev, [name]:value}))
    }

    const doWrite=async ()=>{
        try{
            const response = await axios.post('https://mini03.onrender.com/todos/new', inputs);
            window.location.href = `/todo/read?tno=${response.data.tno}`;
        } catch(err) {
            console.log(err);
        }
    }

  return (
    <div>
      <div className="mb-3 mt-3">
        <label htmlFor="title" className="form-label">할일:</label>
        <input type="text" className="form-control" placeholder="할일 추가" name="title" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="deadline" className="form-label">마감일:</label>
        <input type="date" className="form-control" name="deadline" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="memo">상세내용:</label>
        <textarea className="form-control" rows="5" name="memo" onChange={onChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick={doWrite}>작성하기</button>
    </div>
  );
}

export default TodoWrite;
