import React, { useCallback, useState } from 'react'

const IrumInput = React.memo(({onChange})=>{
    console.log("irum 랜더링");
    return (
        <div>
            이름 : <input type='text' onChange={onChange} />
        </div>
    )
});

const EmailInput = React.memo(({onChange})=>{
    console.log("이메일 랜더링");
    return (
        <div>
            이메일 : <input type='email' onChange={onChange} />
        </div>
    )
})

function TestExam08() {
    const [irum, setIrum] = useState('');
    const [email, setEmail] = useState('');
    let value = 0;

    // useCallback은 함수를 기억해서 불필요한 재생성을 방지 -> 자식에 props로 전달될 때 재렌더링을 방지하기위해 사용
    const changeEmail = useCallback(e => setEmail(e.target.value), []);
    const changeIrum = useCallback(e => setIrum(e.target.value), []);

    const changeValue = () => {
        value++;
        console.log(value);
    }
  return (
    <div>
        {value}<br />
        <button onClick={changeValue}>증가</button>
        <IrumInput onChange={changeIrum} />
        <EmailInput onChange={changeEmail} />
    </div>
  )
}

export default TestExam08