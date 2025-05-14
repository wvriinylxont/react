import React from "react";

// 부모 컴포넌트 : 출력할 데이터를 가진다(model)
// 자식 컴포넌트 : UI 담당(view)
function Idol(props) {
  console.log(props);
  return (
    <div>
      <div>{props.group}</div>
      <div>{props.name}</div>
      <div>{props.birthday}</div>
      <div>{props.role}</div>
    </div>
  );
}

function App04() {
  return (
    <div>
      <Idol group="샤이니" name="온유" birthday="1989.12.14" role="리드보컬" />
    </div>
  );
}

export default App04;
