import React, { useState } from "react";

function usePhoto() {
  // files[0]에 들어있는 업로드할 파일 객체
  const [photo, setphoto] = useState(null);
  // <img src={}>에 출력하려면 주소 형식이 필요
  // 서버에 저장된 주소 or 미리보기할 때는 base64인코딩된 주소형식
  const [photoUrl, setPhotoUrl] = useState(null);

  const onChangePhoto = (e) => {
    // e.target : <input type='file'>
    // 파일 input은 files라는 배열을 가지며 여기에 선택한 파일들이 들어있다
    // - 파일 input에 multiple 속성을 지정하면 여러 파일이 선택 가능 -> file이 아니라 files 배열
    // - multiple을 지정하지 않은 경우에는 선택한 파일은 files[0]에 들어있다
    const file = e.target.files[0];
    setphoto(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhotoUrl(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPhotoUrl(null);
    }
  };
  return { photo, photoUrl, onChangePhoto, setPhotoUrl };
}

export default usePhoto;
