import axios from "axios";
import React, { useEffect, useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    // useEffecct의 파라미터 함수는 async, await 사용 X
    async function fetch() {
      try {
        const response = await axios.get("https://mini03.onrender.com/todos");
        setTodos(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);

  if(todos===null)
    return;

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>번호</th>
            <th>할일</th>
            <th>작성일</th>
            <th>마감일</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => {
            return (
              <tr>
                <td>{todo.tno}</td>
                <td>
                  <a href={`/todo/read?tno=${todo.tno}`} style={{ color: todo.finish ? "red" : "black" }}>
                  {`${todo.title} ${todo.finish ? "(완료)" : ""}`}
                  </a>
                </td>
                <td>{todo.regDate}</td>
                <td>{todo.deadline}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <a href="/todo/write" type="button" className="btn btn-primary">할일 추가로</a>
    </div>
  );
}

export default TodoList;
