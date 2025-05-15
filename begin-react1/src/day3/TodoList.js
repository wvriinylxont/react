import axios from "axios";
import React, { useEffect, useState } from "react";

// 서버에서 https://mini03.onrender.com/todos에서 todos 목록을 받아서 출력
// 생명주기(lifecycle) : 초기화 -> 사용 -> 메모리 제거
// 스프링                @PostConstruct       @PreDestroy
//리액트 훅              useEffect
function TodoList() {
  const [todos, setTodos] = useState(null);

  // useEffect(함수, []) -> 빈 배열을 주면 초기화 함수
  useEffect(() => {
    // 초기화 함수 내부에서 비동기 통신을 할 경우 함수로 만들어서 호출해야 한다
    const fetch = async () => {
      const response = await axios.get("https://mini03.onrender.com/todos");
      setTodos(response.data);
    };
    fetch();
    // [] 초기화 코드
  }, []);

  if (todos === null) return;

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li>
            {todo.tno} {todo.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
