import api from "./api";

// fetcher 함수 : useSWR이 데이터를 읽어오기 위해 실행할 함수. then까지 있어야한다
export const readAll = (pageno) => api.get(`/api/posts?pageno=${pageno}`).then(res=>res.data);

export const read = (pno) => api.get(`/api/posts/post?pno=${pno}`).then(res=>res.data);

// get처럼 delete도 파라미터를 querystring으로 넘겨야한다
// - username은 spring, password는 1234라면
//   post, put, patch는 {username:'spring', password:'1234'} 객체를 만들고
//   api.post('주소', 객체)로 넘기면 객체가 json으로 넘어간다
//   api.post('주소', new URLSearchParams(객체))로 넘기면 객체가 urlencoded형식으로 넘어간다
// get, delete는 위처럼 넘기면 안된다
//    api.delete(`주소?username=spring&password=1234`)와 같은 주소에 파라미터를 담아서(querystring) 전달한다
export const erase = (pno) => api.delete(`/api/posts/post?pno=${pno}`);