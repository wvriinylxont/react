// store : 전역 데이터 저장소
// 컴포넌트들을 데이터를 store에 저장하고 읽어온다 -> 드릴링 제거
// npm install zustand

import React from "react";
import { create } from "zustand";

// create함수를 이용해 useInputStore 객체를 생성(커스텀훅과 마찬가지)
// create함수의 파라미터 set은 zustand가 넘겨준다
const useInputStore = create((set) => ({
  irum: "",
  email: "",
  setField: (name, value) => set((prev) => ({ ...prev, [name]: value })),
}));

const IrumInput = React.memo(() => {
    console.log("IrumInput 재렌더링")
    // store 객체를 통채로 가져와서 구조분해할당하면 안된다 -> 상태 객체를 통채로 전달 받으면 상태 일부만 바뀌어도 재랜더링
    // const {irum, setField} = useInputStore();

    // store 객체에서 필요한 멤버만 꺼낸다(zustand selector)
    // selector로 작업을 하면 zustand가 기본적으로 재생성을 막아준다(100%아님. React.memo()가 생략가능한지는 동작을 보고 판단)
    const irum = useInputStore(state=>{return state.irum});
    const setField = useInputStore(state=>state.setField);

    // useCallback을 사용하려면 함수를 JSX 외부에 정의해야한다
    const onChange = e=>setField('irum', e.target.value);
    return (
        <div>
            이름 : <input onChange={onChange} value={irum} /> 
        </div>
    )
});

const EmailInput = () => {
    console.log("EmailInput 재렌더링")

    const email = useInputStore(state=>{return state.email});
    const setField = useInputStore(state=>state.setField);

    const onChange = e=>setField('email', e.target.value);
    return (
        <div>
            이메일 : <input onChange={onChange} value={email} /> 
        </div>
    )
};

function TestExam09() {
  // 상태를 store로 분리. 부모는 자식 UI 컴포넌트를 담는 단순한 컨테이너
  return (
    <>
      <IrumInput />
      <EmailInput />
    </>
  );
}

export default TestExam09;
