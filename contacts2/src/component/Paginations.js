import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BLOCK_SIZE, PAGE_SIZE } from "./constant";
import { Pagination } from "react-bootstrap";


function Paginations({ data }) {
  const { pageno, pagesize, totalcount } = data;
  const [pagination, setPagination] = useState(null);
  const navigate = useNavigate();
  // prev:0, start:1, end:5, next:6 -> 0, [1,2,3,4,5] 6
  useEffect(() => {
    const 페이지의개수 = Math.floor((totalcount - 1) / pagesize + 1);
    const prev = Math.floor((pageno - 1) / BLOCK_SIZE) * BLOCK_SIZE;
    const start = prev + 1;
    let end = prev + BLOCK_SIZE;
    let next = end + 1;
    if (end >= 페이지의개수) {
      end = 페이지의개수;
      next = 0;
    }
    const pageItem = [];
    for (let i = start; i <= end; i++)
        pageItem.push(i);
    setPagination({ prev, next, pageItem });
  }, []);

  // useEffect의 pagination 계산이 끝나지 않으면 출력하지 마라
  if (pagination == null) 
    return;

  return (
    <>
      <Pagination style={{justifyContent:'center'}}>
        {
          pagination.prev>0 && <Pagination.Item onClick={()=>navigate(`/?pageno=${pagination.prev}`)}>이전으로</Pagination.Item>
        }
        {
          pagination.pageItem.map(i=><Pagination.Item key={i} active={pageno==i} onClick={()=>navigate(`/?pageno=${i}`)} >{i}</Pagination.Item>)
        }
        {
          pagination.next>0 && <Pagination.Item onClick={()=>navigate(`/?pageno=${pagination.next}`)}>다음으로</Pagination.Item>
        }
      </Pagination>
    </>
  );
}

export default Paginations;
