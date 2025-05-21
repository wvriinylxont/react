import React, { useState } from 'react'
import useInput from '../hook/useInput'
import FormField from '../component/FormField';
import axios from 'axios';
import { API_URL } from '../component/constants';
import { useNavigate } from 'react-router-dom';
import ImageField from '../component/ImageField';
import BlockButton from '../component/BlockButton';

function ContactWrite() {
    const nameInput = useInput('이름을 입력하세요');
    const addressInput = useInput('주소를 입력하세요');
    const telInput = useInput('연락처를 입력하세요');

    // 사용자가 선택한 사진 객체
    const [photo, setPhoto] = useState(null);
    // 사진을 <img src=''>에 지정하면 출력되도록 base64인코딩해서 주소형식으로 변환
    const [photoUrl, setPhotoUrl] = useState(null);

    const navigate = useNavigate();

    const changePhoto=(e)=>{
        const file = e.target.files[0];
        setPhoto(file);
        if(file) {
            const reader = new FileReader();
            reader.onload=()=>setPhotoUrl(reader.result);
            reader.readAsDataURL(file)
        }
    }

    const write= async()=>{
        const r1 = nameInput.check();
        const r2 = addressInput.check();
        const r3 = telInput.check();
        if((r1&&r2&&r3)===false)
            return;
        
        // 이름, 주소, 연락처를 담은 요청할 객체를 생성
        const contact = {name:nameInput.value, address:addressInput.value, tel:telInput.value};
        try {
            // 객체를 axios에 전달하면 json 형식으로 변환해서 요청한다
            const response = await axios.post(API_URL, contact);
            const newNo = response.data.no;

            if(photo) {
                // 파일을 담은 multipart/form-data를 처리하는 객체
                const formData = new FormData();
                formData.append('photo', photo);
                await axios.post(`${API_URL}/${newNo}/photo`, formData, {
                    headers: {'Content-Type':"mutipart/form-data"}
                });
            }
            navigate(`/read?no=${newNo}`);
        } catch(err) {
            console.log(err);
        }
    }

  return (
    <div>
        <ImageField name='photo' label='사진' onChange={changePhoto} photoUrl={photoUrl} alt='미리보기' />
        <FormField name='name' label='이름' onChange={nameInput.change} onBlur={nameInput.check} message={nameInput.message} />
        <FormField name='address' label='주소' onChange={addressInput.change} onBlur={addressInput.check} message={addressInput.message} />
        <FormField name='tel' label='연락처' onChange={telInput.change} onBlur={telInput.check} message={telInput.message} />
        <BlockButton value='추가' onClick={write} />
    </div>
  )
}

export default ContactWrite