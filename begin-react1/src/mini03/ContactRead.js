import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ContactRead() {
    const [contact, setContact] = useState(null);
    const [address, setAddress] = useState('');
    const [tel, setTel] = useState('');

    useEffect(()=>{
        const searchParams = new URLSearchParams(window.location.search);
        const cno = searchParams.get('cno');
        if(cno==null || cno=='' || isNaN(Number(cno)))
            window.location.href = "/contact/list";
        async function fetch() {
            try {
                const response = await axios.get(`https://mini03.onrender.com/contacts/${cno}`);
                setContact(response.data);
                setAddress(response.data.address);
                setTel(response.data.tel);
            } catch(err) {
                console.log(err);
            }
        }
        fetch();
    }, []);

    const toggle = async () => {
        try {
            // finish 상태를 반전시킨 전체 객체 생성
            const updated = { ...contact, address, tel };
             // PUT 요청으로 전체 객체 전달
             const response = await axios.put(`https://mini03.onrender.com/contacts`, updated);
            setContact(response.data);
            setAddress(response.data.address);
            setTel(response.data.tel);
            // 변경 완료 후 list로 이동
            window.location.href = "/contact/list";
        } catch(err) {
            console.log(err);
        }
    }

    const remove= async (cno)=>{
        try {
            await axios.delete(`https://mini03.onrender.com/contacts/${cno}`);
            window.location.href="/contact/list";
        } catch(err) {
            console.log(err);
        }
    }

    if(contact==null)
        return;

  return (
    <div>
        <table className='table table-border'>
            <tr>
                <td>주소</td>
                <td>
                    <textarea name='address' value={address} className="form-control" rows='4' onChange={(e) => setAddress(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>전화번호</td>
                <td>
                    <input type='tel' name='tel' className="form-control" value={tel} onChange={(e) => setTel(e.target.value)} />
                </td>
            </tr>
        </table>
        <button className='btn btn-primary' onClick={()=>toggle(contact.cno)}>변경</button>
        &nbsp;&nbsp;&nbsp;
        <button className='btn btn-danger' onClick={()=>remove(contact.cno)}>삭제</button>
    </div>
  )
}

export default ContactRead