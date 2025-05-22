import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useFetch from '../hook/useFetch';
import { API_URL } from '../component/constants';
import usePhoto from '../hook/usePhoto';
import LoadingSpinner from '../component/LoadingSpinner';
import ImageField from '../component/ImageField';
import FormField from '../component/FormField';
import BlockButton from '../component/BlockButton';
import axios from 'axios';
import useInput from '../hook/useInput';

function ContactUpdate() {
    // 1. no를 꺼내자
    const [params]= useSearchParams();
    const navigate = useNavigate();
    const no = params.get('no');
    if(no===null)
        navigate("/");

    // 2. 서버에서 contacts를 읽어온다
    const {data, loading, error} = useFetch(`${API_URL}/${no}`);

    // 3. photo, photoUrl, name, address, tel 커스텀 훅 생성
    const {photo, photoUrl, onChangePhoto, setPhotoUrl} = usePhoto();
    const nameInput = useInput('이름을 입력하세요');
    const addressInput = useInput('주소를 입력하세요');
    const telInput = useInput('연락처를 입력하세요');

    // 4. 수신한 data로 커스텀훅에 값을 주자
    useEffect(()=>{
        if(data) {
            nameInput.setValue(data.name);
            addressInput.setValue(data.address);
            telInput.setValue(data.tel);
            setPhotoUrl(data.photo);
        }
    }, [data]);

    const update = async ()=> {
        const r1 = nameInput.check();
        const r2 = addressInput.check();
        const r3 = telInput.check();
        if((r1&&r2&&r3)===false)
            return;
        
        // 이름, 주소, 연락처를 담은 요청할 객체를 생성
        const contact = {name:nameInput.value, address:addressInput.value, tel:telInput.value};
        try {
            // 객체를 axios에 전달하면 json 형식으로 변환해서 요청한다
            await axios.post(`${API_URL}/${no}`, contact);

            if(photo) {
                // 파일을 담은 multipart/form-data를 처리하는 객체
                const formData = new FormData();
                formData.append('photo', photo);
                await axios.post(`${API_URL}/${no}/photo`, formData, {
                    headers: {'Content-Type':"mutipart/form-data"}
                });
            }
            navigate(`/read?no=${no}`);
        } catch(err) {
            console.log(err);
        }
    }

    if(loading)
        return <LoadingSpinner />
    return (
        <>
        <ImageField label='사진' name='photo' onChange={onChangePhoto} photoUrl={photoUrl} />
        <FormField name='name' label='이름' onChange={nameInput.change} onBlur={nameInput.check} message={nameInput.message} value={nameInput.value} />
        <FormField name='address' label='주소' onChange={addressInput.change} onBlur={addressInput.check} message={addressInput.message} value={addressInput.value} />
        <FormField name='tel' label='연락처' onChange={telInput.change} onBlur={telInput.check} message={telInput.message} value={telInput.value} />
        <BlockButton value='추가' onClick={update} />
        </>
    )
}

export default ContactUpdate