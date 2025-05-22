import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../components/constants";
import useImage from "../hooks/useImage";
import useInput from "../hooks/useInput";
import ImageField from "../components/ImageField";
import BlockButton from "../components/BlockButton";
import FormField from "../components/FormField";
import axios from "axios";

// 랜더링 중 -> 상태를 변경하면 -> 재랜더링 시작 -> 무한루프
// 상태 변경은 항상 렌더링과 무관한 곳에서만 수행
// - 이벤트 핸들러
// - useEffect()
function ContactUpdate() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const no = params.get("no");
  if (!no) navigate("/");

  const { data, loading, error } = useFetch(`${API_URL}/${no}`);

  const { photo, photoUrl, changePhoto, setPhotoUrl } = useImage();
  const nameInput = useInput("이름을 입력하세요");
  const addressInput = useInput("주소를 입력하세요");
  const telInput = useInput("연락처를 입력하세요");

  // 서버에서 받아온 값을 저장하자
  useEffect(()=>{
    if(data) {
        nameInput.setValue(data.name);
        addressInput.setValue(data.address);
        telInput.setValue(data.tel);
        setPhotoUrl(data.photo);
    }
  }, [data]);

  const update= async()=>{
        const r1 = nameInput.check();
        const r2 = addressInput.check();
        const r3 = telInput.check();
        if((r1&&r2&&r3)===false)
            return;
        try {
            // 연락처(이름, 주소, tel) 변경
            const contact = {name:nameInput.value, address:addressInput.value, tel:telInput.value};
            await axios.put(`${API_URL}/${no}`, contact);
            // 이미지 이미지를 변경
            if(photo) {
                const formData = new FormData();
                formData.append('photo', photo);
                await axios.post(`${API_URL}/${no}/photo`, formData, {headers:{'Content-Type':'multipart/form-data'}});
                navigate(`/read?no=${no}`);
            }
        } catch(err) {
            console.log(err);
        }
    }

  return (
    <div>
      <ImageField alt="미리보기" name="photo" label="사진" onChange={changePhoto} photoUrl={photoUrl}/>
      <FormField name="name" label="이름" onChange={nameInput.change} onBlur={nameInput.check} message={nameInput.message} value={nameInput.value} />
      <FormField name="address" label="주소" onChange={addressInput.change} onBlur={addressInput.check} message={addressInput.message} value={addressInput.value} />
      <FormField name="tel" label="연락처" onChange={telInput.change} onBlur={telInput.check} message={telInput.message} value={telInput.value} />
      <BlockButton value="변경" onClick={update} />
    </div>
  )
}

export default ContactUpdate;
