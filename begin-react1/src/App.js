import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./mini03/Header";
import Footer from "./mini03/Footer";
import TodoList from "./mini03/TodoList";
import Index from "./mini03/Index";
import Nav from "./mini03/Nav";
import TodoWrite from "./mini03/TodoWrite";
import TodoRead from "./mini03/TodoRead";
import SupplyList from "./mini03/SupplyList";
import SupplyWrite from "./mini03/SupplyWrite";
import SupplyRead from "./mini03/SupplyRead";
import ContactList from "./mini03/ContactList";
import ContactWrite from "./mini03/ContactWrite";
import ContactRead from "./mini03/ContactRead";

// 우리가 작성할 react app 자바스크립트 객체
function App() {
  return (
    <div id="App">
      {/* 리액트 라우터의 최상위 컴포넌트. 애플리케이션 전체를 감싸야한다 */}
      <BrowserRouter>
        <Header />
        <Nav />
        <main>
          {/* <Routes>내부에는 <Route>만 올 수 있다 */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/todo/list" element={<TodoList />} />
            <Route path="/todo/write" element={<TodoWrite />} />
            <Route path="/todo/read" element={<TodoRead />} />
            <Route path="/supply/list" element={<SupplyList />} />
            <Route path="/supply/write" element={<SupplyWrite />} />
            <Route path="/supply/read" element={<SupplyRead />} />
            <Route path="/contact/list" element={<ContactList />} />
            <Route path="/contact/write" element={<ContactWrite />} />
            <Route path="/contact/read" element={<ContactRead />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
