import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SupplyRead() {
    const [supply, setSupply] = useState(null);

    useEffect(()=>{
        const searchParams = new URLSearchParams(window.location.search);
        const sno = searchParams.get('sno');
        if(sno==null || sno=='' || isNaN(Number(sno)))
            window.location.href = "/supply/list";
        async function fetch() {
            try {
                // 비품 읽기
                const response = await axios.get(`https://mini03.onrender.com/supplies/${sno}`);
                setSupply(response.data);
            } catch(err) {
                console.log(err);
            }
        }
        fetch();
    });

    const inc = async (sno) => {
        try {
            const response = await axios.put(`https://mini03.onrender.com/supplies/inc/${sno}`);
            setSupply(response.data);
        } catch(err) {
            console.log(err);
        }
    }

    const dec = async (sno) => {
        // 0 이하로 못 줄이게
        // quantity를 숫자로 변환해서 비교하도록 Number() 사용
        if (Number(supply.quantity) <= 0) {
            return;
        }
        try {
            const response = await axios.put(`https://mini03.onrender.com/supplies/dec/${sno}`);
            console.log(response.data);
            setSupply(response.data);
        } catch(err) {
            console.log(err);
        }
    }

    const remove =async (sno) => {
        try {
            await axios.delete(`https://mini03.onrender.com/supplies/${sno}`)
            window.location.href="/supply/list";
        } catch(err) {
            console.log(err);
        }
    }

  if(supply==null)
        return;

    return (
    <div>
        <table className='table table-border'>
            <tr>
                <td>비품이름</td>
                <td>{supply.name}</td>
            </tr>
            <tr>
                <td>작성일</td>
                <td>{supply.regDate}</td>
            </tr>
            <tr>
                <td>비품개수</td>
                <td>{supply.quantity}</td>
            </tr>
        </table>
        <button className='btn btn-success' onClick={()=>inc(supply.sno)}>+</button>
        &nbsp;&nbsp;&nbsp;
        <button className='btn btn-warning' onClick={()=>dec(supply.sno)}>-</button>
        &nbsp;&nbsp;&nbsp;
        <button className='btn btn-danger' onClick={()=>remove(supply.sno)}>삭제</button>
    </div>
  )
}

export default SupplyRead