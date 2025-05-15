import React, { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    { id: 1, username: "spring", active: true },
    { id: 2, username: "summer", active: false },
    { id: 3, username: "fall", active: false },
  ]);
  const [username, setUsername] = useState("");
  const [id, setId] = useState(4);

  const add = () => {
    const newUser = { id, username };
    setId((prev) => prev + 1);
    setUsers([...users, newUser]);
    setUsername("");
  };

  const remove = (id) => {
    // 배열의 filter 메소드는 참거짓을 리턴하는 화살표함수를 파라미터로 받아, 참인 원소만 추출출
    setUsers(users.filter((user) => user.id !== id));
  };

  const toggle = (id) => {
    // 배열의 각원소에 대해 -> id가 일치하면 active를 !active로, 일치하지 않으면 그대로
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="username"
          placeholder="아이디 입력"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button onClick={add}>추가하기</button>
      </div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <span
                style={{ color: user.active ? "green" : "black" }}
                onClick={() => toggle(user.id)}
              >
                {user.username}
              </span>
              <button onClick={() => remove(user.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Users;

/*
1. users.forEach(user=>console.log(user))
   forEach는 입력이 있고 출력은 없는 화살표 함수가 온다
   users의 원소가 하나씩 꺼내져 user란 파라미터에 담겨 화살표 함수를 호출
2. users.filter(user=>user.id!==id)
   filter의 파라미터인 화살표 함수는 입력이 있고, 출력이 참거짓
   filter 함수는 화살표 함수의 결과가 true인 원소만 추출해 새로운 배열을 생성한다
   사용자가 선택한 id    filter의 파라미터    id!==user.id    결과배열
        3                1 spring true         true          추가
                         2 summer false        true          추가
                         3 fall false          false         삭제
3. users.map(user=>user.id==id? {...user, active:!user.active}: user)
   filter는 조건을 맞는 것을 추출 vs map은 원소를 다른 것으로 변환
   사용자가 선택한 user는 active값을 toggle
   사용자가 선택하지 user는 그대로 출력
4. {...user, active:!active}
   전개 연산자로 user를 id, name, active로 분해한 다음 {}로 객체로 만든다
   다음에 active라는 필드명이 왔다
   여기서 active라는 필드가 새로운 필드면 객체에 추가
   active라는 필드가 있으면 변경한다
   현재는 ...user에 active라는 필드가 있기 때문에 !user.active로 바꿔라
   
   왜 !active라고 적으면 안되고 !user.active라고 적어야 하는가?
   현재 화살표 함수를 만드는 중이지
   그러면 변수는 함수 안에서 찾는다
   함수 안에는 active라는 변수는 없다
   {...user}안에 active가 들어있지 않나?
   JS가 봤을 때 현재 함수 내부에는 user는 있지만 active란 이름은 없어
*/
