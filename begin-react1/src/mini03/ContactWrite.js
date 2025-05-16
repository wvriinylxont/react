import axios from "axios";
import React, { useState } from "react";

function ContactWrite() {
  const [inputs, setInputs] = useState({ name: "", address: "", tel: "" });
  
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const write = async () => {
    try {
      const response = await axios.post("https://mini03.onrender.com/contacts/new", inputs);
      window.location.href = `/contact/list`;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="name" className="form-label">이름:</label>
        <input type="text" className="form-control" placeholder="이름 입력" name="name" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">주소:</label>
        <input type="text" className="form-control" name="address" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="tel" className="form-label">전화번호:</label>
        <input type="tel" className="form-control" name="tel" onChange={onChange} />
      </div>
      <button className="btn btn-primary" onClick={write}>작성하기</button>
    </div>
  );
}

export default ContactWrite;
