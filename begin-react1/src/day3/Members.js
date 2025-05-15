import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// 이름, 연락처
function Members() {
  const [members, setMembers] = useState([
    {
      id: 1,
      irum: "홍길동",
      tel: "01011112222",
      regDate: new Date().toLocaleString(),
    },
  ]);
  const [inputs, setInputs] = useState({ irum: "", tel: "" });
  const [id, setId] = useState(2);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const addMember = () => {
    if (inputs.name === "" || inputs.tel === "") {
      alert("이름과 연락처를 입력하세요");
      return;
    }
    const newMember = {
      id: id,
      irum: inputs.irum,
      tel: inputs.tel,
      regDate: new Date().toLocaleString(),
    };
    setMembers((prev) => [...prev, newMember]);
    setId((prev) => prev + 1);
    setInputs({ irum: "", tel: "" });
  };

  const remove = (id) =>
    setMembers((prev) => prev.filter((member) => member.id !== id));

  return (
    <>
      <h1>연락처</h1>
      <div>
        <input
          type="text"
          name="irum"
          placeholder="이름 입력"
          onChange={onChange}
          value={inputs.irum}
        />
        <input
          type="text"
          name="tel"
          placeholder="전화번호 입력"
          onChange={onChange}
          value={inputs.tel}
        />
        <button onClick={addMember}>추가</button>
      </div>
      <table className="table table-border">
        <thead>
          <tr>
            <th>이름</th>
            <th>연락처</th>
            <th>등록일</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => {
            return (
              <tr key={member.id}>
                <td>{member.irum}</td>
                <td>{member.tel}</td>
                <td>{member.regDate}</td>
                <th>
                  <button onClick={() => remove(member.id)}>삭제</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Members;
