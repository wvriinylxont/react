import React from 'react'

// 사진을 선택하면 base64인코딩해서 주소형식으로 변환해 미리보기할 수 있게 하겟다(photoUrl)
// 사진주소 or base64인코딩을 주소 형식으로 표현한 문자열
// 둘중 어떤 방식이든 <img src={photoUrl}>이라고 주면 미리보기가 된다
// <input type='file'>에서 선택한 사진(files[0])은 JS 객체 형식이고 <img> 태그로 출력불가

// alt : 원래는 사진을 설명하는 글 -> 현재는 시각장애인에게 사진을 설명하는 글로 사용
function ProfileField({photoUrl, alt, name, label, onChange}) {
  return (
    <>
    {photoUrl && <img src={photoUrl} style={{height:'200px', objectFit:'cover'}} alt={alt} />}
    <div className='mt-3 mb-3'>
        <label htmlFor={name} className='form-label'>{label}:</label>
        <input type='file' className='form-control' name={name} onChange={onChange} />
    </div>
    </>
  )
}

export default ProfileField