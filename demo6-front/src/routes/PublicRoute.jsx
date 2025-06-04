import React from 'react'
import useAuthStore from '../stores/useAuthStore'
import { Navigate } from 'react-router-dom';

// 비로그인이면 접근가능
function PublicRoute({element}) {
    const username = useAuthStore(state => state.username);

    if(username===undefined)
        return;

    // 로그인이 되어 있다면 루트 경로를 렌더링해라, 비로그인이면 전달받은 element를 렌더링해라
  return username? <Navigate to='/' />:element;
}

export default PublicRoute