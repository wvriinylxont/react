import React, { useEffect } from 'react'
import useAppStore from './stores/useAppStore'
import { Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';

function App() {
    // 훅을 통채로 가져온 다음 checkAuth, socket을 꺼낸다
    // 훅에 있는 어떤 상태라도 변경되면 재렌더링
    const {checkAuth, socket} = useAppStore();

    // 훅에 checkAuth만 가져온다
    // const checkAuth = useAppStore(state => state.checkAuth);

    // 주소가 바뀔때마다 로그인 정보를 갱신해라
    const location = useLocation();
    useEffect(()=>checkAuth(), [location]);

    // 로그인 했으면 toast를 띄울 subscribe를 등록
    useEffect(()=>{
        if(!socket)
            return;
        socket.subscribe('/user/sub/job3', (message)=>{
            toast.success("🦄 메시지가 도착했습니다 !", {position: "top-right",autoClose: false,hideProgressBar: false,closeOnClick: false, pauseOnHover: true,draggable: true, progress: undefined,theme: "colored",transition: Bounce})
            })
    }, [socket])

  return (
    <div>
        <Routes>

        </Routes>
        <ToastContainer />
    </div>
  )
}

export default App