import React, { useState } from 'react'
import useFetch from '../hook/useFetch';
import useInput from '../hook/useInput';


function ContactUpdate_1() {
  // 서버에서 Contact를 수신 -> 상태 변경 -> 랜더링 시작
  const {data} = useFetch();

  // 랜더링이 끝나기 전에(랜더링을 하고 있는 도중에) 다른 상태 변경 -> 재랜더링이 다시 발생 -> 무한 루프가 발생
  const nameInput = useInput(data.name);

  // 랜더링 중에 상태를 바꾸면 안된다(랜더링 시작하기전 또는 랜더링이 끝난 다음)
  // 1. onClick={()=>setCount(prev=>prev+1)}와 같은 이벤트 핸들러
  // 2. useEffect() 내부
  //    - useEffect에서 상태를 변경하면 즉시 실행하는 것이 아니라 랜더링이 끝난 다음에 실행
  //    스프링으로 치면 @PostConstuct같은 존재
  //    - useEffect에 상태를 변경하는 코드를 작성하면 나중에 실행해달라고 예약하는 것이다
  return (
    <div></div>
  )
}

export default ContactUpdate_1