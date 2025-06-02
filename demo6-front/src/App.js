import logo from "./logo.svg";
import "./App.css";
import PostList from "./pages/posts/PostList";
import Header from "./fragments/Header";
import Nav from "./fragments/Nav";
import Aside from "./fragments/Aside";
import { Route, Routes } from "react-router-dom";
import Footer from "./fragments/Footer";
import MemberSignup from "./pages/members/MemberSignup";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <Aside />
        <section>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/member/signup" element={<MemberSignup />} />
          </Routes>
        </section>
        <Aside />
      </main>
      <Footer />
    </div>
  );
}

export default App;
