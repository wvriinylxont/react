import React, { useEffect, useState } from "react";
import useTodoStore from "../store/TodoStore";
import { Link } from "react-router-dom";

function Todos() {
  const todos = useTodoStore(state => state.todos);
  return (
    <div>
      <table className="table table-border">
        <thead>
            <tr>
                <th>번호</th>
                <th>할일</th>
                <th>작성일</th>
                <th>완료일</th>
            </tr>
        </thead>
        <tbody>
          {
          todos.map(t => {
            return (
              <tr key={t.tno}>
                <td>{t.tno}</td>
                <td>
                  <Link to={`/read?tno=${t.tno}`}>
                    {t.title} {t.finish ? "(완료)" : "(작업중)"}
                  </Link>
                </td>
                <td>{t.regDate}</td>
                <td>{t.deadline}</td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Todos;
