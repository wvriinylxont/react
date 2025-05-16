import axios from "axios";
import React, { useState } from "react";

function SupplyWrite() {
  const [inputs, setInputs] = useState({ name: "", quantity: "" });
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const add = async () => {
    try {
      const response = await axios.post("https://mini03.onrender.com/supplies/new", inputs);
      window.location.href = `/supply/list`;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="mb-3 mt-3">
        <label htmlFor="name" className="form-label">비품이름:</label>
        <input type="text" className="form-control" placeholder="비품이름 입력" name="name" onChange={onChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">비품개수:</label>
        <input type="number" className="form-control" name="quantity" onChange={onChange} />
      </div>
      <button className="btn btn-primary" onClick={add}>추가하기</button>
    </div>
  );
}

export default SupplyWrite;
