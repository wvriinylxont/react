import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [inputs, setInputs] = useState({ title: "", deadline: "" });
  const [tno, setTno] = useState(1);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const addTodo = () => {
    if (inputs.title === "" || inputs.deadline === "") {
      alert("할일과 마감기한을 입력하세요");
      return;
    }

    const newTodo = {
      tno: tno,
      title: inputs.title,
      regDate: new Date().toLocaleString(),
      deadline: new Date(inputs.deadline).toLocaleString(),
      finish: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTno((prev) => prev + 1);
    // 초기화
    setInputs({ title: "", deadline: "" });
  };

  const toggle = (tno) => {
    setTodos(
      todos.map((todo) =>
        todo.tno === tno ? { ...todo, finish: !todo.finish } : todo
      )
    );
  };

  const remove = (tno) =>
    setTodos((prev) => prev.filter((todo) => todo.tno !== tno));

  return (
    <>
      <div>
        <div className="mb-3">
          <input
            type="text"
            name="title"
            placeholder="할일 입력"
            className="form-control mb-2"
            onChange={onChange}
            value={inputs.title}
          />
          <input
            type="date"
            name="deadline"
            className="form-control mb-2"
            onChange={onChange}
            value={inputs.deadline}
          />
          <div className="d-grid">
            <button className="btn btn-primary" onClick={addTodo}>추가</button>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>등록일</th>
              <th>마감일</th>
              <th>완료여부</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.tno}>
                <td>{todo.tno}</td>
                <td style={{ color: todo.finish ? "red" : "black"}}>
                  {todo.title}
                </td>
                <td>{todo.regDate}</td>
                <td>{todo.deadline}</td>
                <td onClick={() => toggle(todo.tno)}>
                  <button className="btn btn-success">{todo.finish ? "완료" : "미완료"}</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => remove(todo.tno)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Todos;
