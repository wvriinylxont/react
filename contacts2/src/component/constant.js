const PAGE_SIZE = 10;

const API_URL = "https://sample.bmaster.kro.kr/contacts";

const BLOCK_SIZE = 5;

const findAllUrl = (pageno) =>`${API_URL}?pageno=${pageno}&pagesize=${PAGE_SIZE}`;

const findByNoUrl = (no) =>`${API_URL}/${no}`;

const deleteByNoUrl = (no) =>`${API_URL}/${no}`;

const createUrl = () => `${API_URL}`;

const changePhotoUrl = (no) => `${API_URL}/${no}/photo`;

export { findAllUrl, BLOCK_SIZE, PAGE_SIZE, findByNoUrl, deleteByNoUrl, createUrl, changePhotoUrl, API_URL };

/*
  값과 함수를 export하면 외부에서 import해서 사용할 수 있다
  hook도 상태와 함수를 제공하면 외부에서 import해서 사용
  무슨 차이가 있나 ? hook은 내부적으로 리액트 코드를 사용 
*/
