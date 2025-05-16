import axios from 'axios';
import React, { useEffect, useState } from 'react'

// /todo/read?tno=111
function TodoRead() {
    const [todo, setTodo] = useState(null);

    useEffect(()=>{
        const searchParams = new URLSearchParams(window.location.search);
        const tno = searchParams.get('tno');
        // /todo/read -> tno가 null, /todo/read?tno=aaa -> isNaN(), /todo/read?tno= ->''
        if(tno==null || tno=='' || isNaN(Number(tno)))
            window.location.href = "/todo/list";
        async function fetch() {
            try {
                const response = await axios.get(`https://mini03.onrender.com/todos/${tno}`);
                setTodo(response.data);
            } catch(err) {
                console.log(err);
            }
        }
        fetch();
    });

    const toggle=async (tno)=>{
        try {
            const response = await axios.put(`https://mini03.onrender.com/todos/toggle/${tno}`);
            setTodo(prev=>({...prev, finish:response.data}))
        } catch(err) {
            console.log(err);
        }
    }

    const remove=async (tno)=>{
        try {
            await axios.delete(`https://mini03.onrender.com/todos/${tno}`);
            window.location.href="/todo/list";
        } catch(err) {
            console.log(err);
        }
    }

    if(todo==null)
        return;
  return (
    <div>
        <table className='table table-border'>
            <tr>
                <td>할일</td>
                <td>{todo.title}</td>
            </tr>
            <tr>
                <td>작성일</td>
                <td>{todo.regDate}</td>
            </tr>
            <tr>
                <td>마감일</td>
                <td>
                    {todo.finish? todo.deadline:<input type='date' name='deadline' className="form-control" value={todo.deadline} />}
                </td>
            </tr>
            <tr>
                <td>상세설명</td>
                <td>
                    {todo.finish? todo.memo:<textarea name='memo' value={todo.memo} className="form-control" rows='4' />}
                </td>
            </tr>
        </table>
        <button className='btn btn-primary' onClick={()=>toggle(todo.tno)}>{todo.finish? '작업중 체크':'완료 체크'}</button>
        &nbsp;&nbsp;&nbsp;
        <button className='btn btn-danger' onClick={()=>remove(todo.tno)}>삭제</button>
    </div>
  )
}

export default TodoRead