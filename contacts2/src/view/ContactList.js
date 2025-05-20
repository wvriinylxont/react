import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
import LoadingSpinner from '../component/LoadingSpinner';
import { findAllUrl } from '../component/constant';
import Contacts from '../component/Contacts';
import Paginations from '../component/Paginations';

function ContactList() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({pageno:0, pagesize:0, totalcount:0, contacts:[]});
    const [params] = useSearchParams();
    const pageno = params.get('pageno')==null? 1:params.get('pageno');

    useEffect(()=>{
        // pageno가 없을때 1 -> useEffect가 서버로 가서 출력
        //                                -> console.log 출력
        // pageno가 1일때 초기값 :  0,0,0,[] update 상태 {1, ----}
        // pageno가 2로 갔을때 초기값 : 1, --- 비동기 X -> useEffect
        async function fetch() {
            setLoading(true);
            try {
                const response = await axios.get(findAllUrl(pageno));
                setData(response.data);
                setLoading(false);
            } catch(err) {
                console.log('api 오류', err);
            }
        }
        fetch();
    }, [params])
    
    // 데이터가 없을 때 또는 useEffectㄹ로 데이터를 갱신할 때 LoadingSpinner를 띄워라
    if(data.contacts.length===0 || loading )
        return <LoadingSpinner />
        // paggeno가 바뀔때마다 기존 상태로 한번출력하고 상태가 변경된 다음 한번 출력한다(2번씩 출력)
        // 리액트는 상태가 바뀌면 메모리에서 컴포넌트를 출력한 다음 화면과 비교해 변경된 부분만 갱신한다
        // (2번 출력 중 첫번째, 기존 상태를 출력할 때 변경된 부분이 없으므로 화면은 갱신되지 않는다) -> 신경 x

  return (
    <>
    <Contacts contacts={data.contacts} />
    <Paginations data={data} />
    </>
  )
}

export default ContactList