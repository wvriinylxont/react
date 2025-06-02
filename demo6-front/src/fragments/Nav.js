import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/member/signup">회원가입</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
