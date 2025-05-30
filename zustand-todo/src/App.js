import logo from "./logo.svg";
import "./App.css";
import TestExam01 from "./exam1/TestExam01";
import TestExam02 from "./exam1/TestExam02";
import TestExam03 from "./exam1/TestExam03";
import TestExam04 from "./exam1/TestExam04";
import TestExam05 from "./exam1/TestExam05";
import TestExam06 from "./exam1/TestExam06";
import TestExam07 from "./exam1/TestExam07";
import TestExam08 from "./exam1/TestExam08";
import TestExam09 from "./exam1/TestExam09";
import TodoList from "./pages/TodoList";
import { Route, Routes } from "react-router-dom";
import TodoRead from "./pages/TodoRead";
import TodoWrite from "./pages/TodoWrite";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/read" element={<TodoRead />} />
        <Route path="/write" element={<TodoWrite />} />
      </Routes>
    </div>
  );
}

export default App;
