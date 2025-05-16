import React, { useEffect, useState } from 'react'

function UseEffectTest() {
    const [a, setA] = useState();
    const [b, setB] = useState();

    // 생명주기(수명주기, lifecycle) : 생성할 때, 상태가 업데이트되었을 때때
    useEffect(()=>{
        console.log('항상 실행');
    });

    useEffect(()=>{
        console.log('빈 의존성 배열 -> 컴포넌트 초기화 -> api에서 데이터를 받아온다')
    }, []);

    useEffect(()=>{
        console.log('a상태가 변경되면 실행 -> 예) 페이지번호가 변경되면 api에서 데이터를 받아온다')
    }, [a]);

    useEffect(()=>{
        console.log('a 또는 b 상태가 변경되면 실행')
    }, [a,b]);

  return (
    <div>UseEffectTest</div>
  )
}

export default UseEffectTest