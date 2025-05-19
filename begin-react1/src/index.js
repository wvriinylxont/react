import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Velopert01 from "./day5/Velopert01";
import Velpopert02 from "./day5_1/Velpopert02";
import TodoApp from "./day5_2/TodoApp";

// index.html의 <div id='root'></div>에 리액트 앱을 render
// <React.StrictMode>가 있으면 App이 2번 실행된다(디버깅을 위해 필요하다) -> 제거해서 1번만 실행되게
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <TodoApp />
  // </React.StrictMode>
);

reportWebVitals();
