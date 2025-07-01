import { useNavigate } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';

const Paginations = ({pagination}) => {
  const {prev,start,end,next,pageno} = pagination;
  const navigate = useNavigate();

  // pagination 상태를 가지고 출력할 페이지 번호를 계산 -> 반복문에서 사용하고 끝 -> 상태가 아니라 파생속성
  const pages=[];
  for(let i=start; i<=end; i++) {
    pages.push(i);
  }

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