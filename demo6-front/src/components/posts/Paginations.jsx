import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import usePasswordStore from '../../stores/usePasswordStore';

const Paginations = ({pagination}) => {
    // 1. 예를 들어 1페이지 상태에서 다음으로 (6페이지)를 누르면
    // 2. store에서 1페이지 pagination을 읽어온다 -> useEffect가 실행된다 -> 화면에 출력
    // 3. 그동안 pageList의 useEffect에서 6 페이지의 데이터를 fetch한다
    // 4. pageList가 store의 pagination을 변경했지만 useEffect(()=>{}, [])이므로 Paginations가 갱신되지 x
    // 5. pageList가 store의 pagination을 변경하면 자식인 paginations가 그 변경에 따라 useEffect를 다시 계산
    //    useEffect(()=>{}, [pagination])

  const {prev,start,end,next,pageno} = pagination;
  const [pages, setPages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const pageItem = [];
    // jsx는 1부터 5까지 형식의 for문 사용불가
    // 1부터 5까지 찍으려면 미리 [1,2,3,4,5] 배열을 만들어 놓고 map한다
    for (let i = start; i <= end; i++) 
      pageItem.push(i);
    setPages(pageItem);
  }, [pagination]);

  const move = (pageno) => navigate(`/?pageno=${pageno}`);

  return (
    <Pagination style={{justifyContent:'center'}} className="mt-5">
      {prev > 0 && <Pagination.Item onClick={() => move(prev)}>이전으로</Pagination.Item>}
      {
        pages.map(i => (
          <Pagination.Item key={i} active={pageno === i} onClick={() => move(i)}>{i}</Pagination.Item>
        ))
      }
      {next > 0 && <Pagination.Item onClick={() => move(next)}>다음으로</Pagination.Item>}
    </Pagination>
  );
}

export default Paginations;