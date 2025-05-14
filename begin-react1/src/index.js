import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import App09 from "./day2/App09";

// index.html의 <div id='root'></div>에 리액트 앱을 render
// <React.StrictMode>가 있으면 App이 2번 실행된다(디버깅을 위해 필요하다) -> 제거해서 1번만 실행되게게
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App09 />
  // </React.StrictMode>
);

reportWebVitals();
