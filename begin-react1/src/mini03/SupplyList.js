import axios from "axios";
import React, { useEffect, useState } from "react";

function SupplyList() {
  const [supplies, setSupplies] = useState(null);
  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get("https://mini03.onrender.com/supplies");
        setSupplies(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);

  if (supplies === null) return;
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>번호</th>
            <th>비품이름</th>
            <th>작성일</th>
            <th>비품개수</th>
          </tr>
        </thead>
        <tbody>
          {supplies.map((supply) => {
            return (
              <tr>
                <td>{supply.sno}</td>
                <td>
                    <a href={`/supply/read?sno=${supply.sno}`}>
                        {supply.name}
                    </a>
                </td>
                <td>{supply.regDate}</td>
                <td>{supply.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <a href="/supply/write" type="button" className="btn btn-primary">비품 추가로</a>
    </div>
  );
}

export default SupplyList;
