import React, { useEffect, useState } from "react";
import usePasswordStore from "../../stores/usePasswordStore";
import { Navigate, useNavigate } from "react-router-dom";
import { AsyncStatus } from "../../utils/constant";
import useProfile from '../../hooks/useProfile'
import useSWR, { mutate } from "swr";
import { changeProfile, read } from "../../utils/memberApi";
import LoadingSpinner from "../../components/commons/LoadingSpinner";
import { Alert } from "react-bootstrap";
import ProfileField from '../../components/members/ProfileField'

function MemberRead() {
  // 1. 필요한 기능 가져오기
  // - 비밀번호 변경 버튼의 핸들러에서 사용할 라우팅 훅
  const navigate = useNavigate();
  // - 비밀번호 확인 여부를 store에서 가져온다
  const isPasswordVerified = usePasswordStore(state => state.isPasswordVerified);
  // - 프사 업데이트 : 프사 훅과 변경 작업 상태
  const [status, setStatus] = useState(AsyncStatus.IDLE);
  const vProfile = useProfile();

  // 2. 내정보 읽어오기
  // - 훅의 리턴이 []이다 -> 개발자가 이름을 변경할 수 있다 const [count, setCount] = useState();
  // - 훅의 리턴이 {}다 -> 이름 변경 불가
  const {data, error, isLoading} = useSWR(['me'], ()=>read(), {revalidateOnFocus : false})

  // 3. 상태를 변경 : useEffect 또는 이벤트 핸들러
  //    컴포넌트 렌더링하는 도중에 상태를 변경하면 무한 재렌더링
  //    useEffect(()=>{})에 등록된 콜백함수는 렌더링이 끝난 다음에 실행 -> 무한 재렌더링이 발생하지 X
  useEffect(()=>{
    if(data) {
      console.log(data);
      vProfile.setPhotoUrl(data.profile);
    }
  }, [data]);

  const doChangeProfile = async() => {
    // 버튼 2번 클릭 못하게
    if(status===AsyncStatus.SUBITTING) return;
    setStatus(AsyncStatus.SUBITTING);

    // photoUrl : 서버에서 받아온 프사, value : 사용자가 선택한 프사
    // 사용자 프로필을 출력만 하고 변경하지 않은 상태에서 변경버튼을 누르면 return
    if(!vProfile.value) {
      setStatus(AsyncStatus.IDLE);
      return;
    }
    console.log(vProfile);
    try {
      const formData = new FormData();
      formData.append('profile', vProfile.value);
      const response = await changeProfile(formData);
      // 원래 프사가 a.jpg, 변경한 프사가 b.jpg라고 해보자
      // 프사를 변경하면 swr이 캐시(cache)하고 있는 프사는 a.jpg, 서버에서 변경된 프사는 b.jpg -> 불일치

      // swr 캐시를 mutate 함수로 강제 업데이트
      // 강제 업데이트를 시키면 swr이 서버에 확인하러 간다. 지금은 그럴 필요가 없다(세번째 파라미터에 false)
      mutate('me', response.data, false);

      setStatus(AsyncStatus.SUCCESS);
    } catch(err) {
      setStatus(AsyncStatus.FAIL);
      console.log(err);
    }
  }

  // 버튼을 클릭하면 다른 곳으로 이동해라 : navigate
  //  navigate 훅은 화면 렌더링에 관련된 사이드 이펙트이므로 useEffect 또는 이벤트 핸들러에서만 사용용
  // 조건부 렌더링 : <Navigate />
  if (!isPasswordVerified) return <Navigate to="/member/check-password" replace />;
  if(isLoading) return <LoadingSpinner />
  if(error) return <Alert variant="danger">회원정보를 읽을 수 없습니다</Alert>

  return (
  <div>
    <table className="table table-border">
      <tbody>
      <tr>
        <td colSpan={2}>
          <ProfileField name='profile' label='프로필' alt='미리보기' {...vProfile} />
          <button className="btn btn-primary" onClick={doChangeProfile}>프사 변경</button>
        </td>
      </tr>
      <tr>
        <td>아이디</td>
        <td>{data.username}</td>
      </tr>
      <tr>
        <td>이메일</td>
        <td>{data.email}</td>
      </tr>
      <tr>
        <td>레벨</td>
        <td>{data.level}</td>
      </tr>
      <tr>
        <td>가입일</td>
        <td>{data.joinday}</td>
      </tr>
      </tbody>
    </table>
    <button className='btn btn-danger' onClick={()=>navigate('/member/change-password')}>비밀번호 변경으로</button>
  </div>
  )
}

export default MemberRead;
