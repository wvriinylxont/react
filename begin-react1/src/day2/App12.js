import React, { useState } from "react";

const product = {
  name: "홈런볼 초코",
  price: 1520,
  image:
    "https://image.homeplus.kr/rtd/e4fda9f7-37fa-418a-af30-6cbbda7e29f6?w=750",
  count: 1,
};

function App12() {
  const [item, setItem] = useState(product);

  // 리액트는 새로운 객체가 만들어져야 상태가 변경되었다는 사실을 눈치채고 재 렌더링
  // vue는 기존 객체의 값을 바꿔야 상태가 변경되었다는 사실을 눈치채고 재 렌더링
  const inc = () => {
    setItem({ ...item, count: item.count + 1 });
  };
  const dec = () => {
    let count = item.count;
    if (count > 1) {
      setItem({ ...item, count: item.count - 1 });
    }
  };
  return (
    <table>
      <thead>
        <tr>
          <th>상품</th>
          <th>구매예정금액</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={item.image} width="200px" />
          </td>
          <td>{item.price * item.count}원</td>
          <td>
            <button onClick={inc}>+</button>
            <span>{item.count}</span>
            <button onClick={dec}>-</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default App12;
