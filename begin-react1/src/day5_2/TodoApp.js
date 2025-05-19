import React, { useState } from 'react'
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import TodoCount from './TodoCount';

// 할일 추가, 할일 출력, 할일 통계 컴포넌트로 구성
// 기능 : 할일 추가, 할일 삭제, 할일 toggle
// 할일통계 : 할일 개수, 완료된 할일 개수수

function TodoApp() {
    const [todos, setTodos] = useState(
        [{id:1, title:'영어공부', regDate:new Date().toDateString(), deadline:'2025-12-10', finish:false}]
    )

    const [inputs, setInputs] = useState({title:'', deadline:''});
    const [id, setId] = useState(2);

    const change = e => {
        const {name, value} = e.target;
         setInputs(prev=>({...prev, [name]:value}));
    }

    const create = () => {
        const newTodo = {id:id, title:inputs.title, deadline:inputs.deadline};
        setTodos(prev=>[...prev, newTodo]);
        setInputs({title:'', deadline:''});
        setId(prev=>prev+1);
    }

    const remove=(id)=>setTodos(prev=>prev.filter(todo=>todo.id!==id));

     const toggle=(id)=>setTodos(prev=>prev.map(todo=>todo.id==id? {...todo, active:!todo.active}:todo));

  return (
    <div>
        <TodoCount todos={todos} />
        <TodoCreate change={change} create={create} title={inputs.title} deadline={inputs.deadline} />
        <TodoList todos={todos} remove={remove} toggle={toggle} />
    </div>
  )
}

export default TodoApp