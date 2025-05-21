import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import { API_URL } from '../component/constants';
import LoadingSpinner from '../component/LoadingSpinner';
import useInput from '../hook/useInput';

function ContactUpdate() {
    // useFetch로 데이터를 받아와 useInput을 업데이트하면, 상태가 바뀌면서 재렌더링 -> useFetch() -> 무한 루프발생
    // useFetch를 사용하지 않고 수동으로 처리
    const [contact, setContact] = useState({no:0, name:'', address:'', tel:''});
    const [photo, setPhoto] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);

    const [params] = useSearchParams();
    const no = params.get('no');
    const {error, loading, data} = useFetch(`${API_URL}/${no}`);

    const nameInput = useInput('이름은 필수입력입니다');
    const addressInput = useInput('주소는 필수입력입니다');
    const telInput = useInput('연락처는 필수입력입니다');

    if(loading)
        return <LoadingSpinner />
    if(error)
        return null;

    nameInput.setValue(data.name);
    addressInput.setValue(data.address);
    telInput.setValue(data.tel);
  return (
    <div>ContactUpdate</div>
  )
}

export default ContactUpdate