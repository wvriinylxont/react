import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useTodoStore from '../store/TodoStore';
import { read } from '../utils/todoApi';

function TodoRead() {
    const [searchParams] = useSearchParams();
    const tno = parseInt(searchParams.get('tno'));

    const currentTodo = useTodoStore(state=>state.currentTodo);
    const setCurrentTodo = useTodoStore(state=>state.setCurrentTodo);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        async function fetch() {
            try {
                const response = await read(tno);
                setCurrentTodo(response.data);
            } catch(err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        fetch();
    }, [])

    if (loading) return <div>로딩 중...</div>
    // TOdoRead를 최초로 실행해 store의 todo가 아직 초기화되지 않았다면
    if (currentTodo===null) return;
    // TOdoRead가 실행되고 나면 store
    // 170번 할일을 읽고 내가 새로운 할일을 작성했다 -> /read?tno=171로 navigate -> 171번글을 읽어야하는데
    // -> currentTodo에 170이 저장되어 있으므로 일단 출력 -> useEffect가 실행된 다음 171번으로 덮어쓴다
    if (currentTodo.tno!==tno) return;
  return (
    <div>
        할일 : {currentTodo.title}
        <button>삭제</button>
    </div>
  )
}

export default TodoRead