import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Login from "./day3/Login";
import Update from "./day3/Update";
import Login2 from "./day3/Login2";
import Users from "./day3/Users";
import Members from "./day3/Members";
import Todos from "./day3/Todos";
import TodoList from "./day3/TodoList";

// index.html의 <div id='root'></div>에 리액트 앱을 render
// <React.StrictMode>가 있으면 App이 2번 실행된다(디버깅을 위해 필요하다) -> 제거해서 1번만 실행되게게
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <TodoList />
  // </React.StrictMode>
);

reportWebVitals();
