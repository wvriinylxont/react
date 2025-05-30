import React, { useEffect, useState } from "react";
import Todos from "../component/Todos";
import useTodoStore from "../store/TodoStore";
import { readAll } from "../utils/todoApi";

function TodoList() {
  // 1. store에서 todos
  const setTodos = useTodoStore((state) => state.setTodos);
  const [loading, setLoading] = useState(false);
  const todos = useTodoStore((state) => state.todos);

  useEffect(() => {
    setLoading(true);
    async function fetch() {
      try {
        const response = await readAll();
        setTodos(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  //  처음 실행할 때 (useEffect가 끝나기 전에) todos가 []상태로 30라인이 진행된다
  //    아래코드는 <Todos />가 랜더링되는 것을 막지 못한다다
  if (loading) return <div>로딩 중...</div>
  // todos가 서버에서 읽히기 전이라면 자식들을 랜더링 하지마라
  if (todos.length===0) return;

  return (
    <div>
      <Todos />
    </div>
  );
}

export default TodoList;
