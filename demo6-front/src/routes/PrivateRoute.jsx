import React from 'react'
import useAuthStore from '../stores/useAuthStore'
import { Navigate } from 'react-router-dom';

// 로그인하면 접근 가능
function PrivateRoute({element}) {
    const username = useAuthStore(state => state.username);

    // 로그인이 아직 확인되지 않았다면 종료
    // 로그인이 확인되면 store가 갱신되고, 현재 PrivateRoute는 username을 구독하고 있기 때문에 재렌더링된다
    // store에 저장된 상태가 갱신되면, 그 상태를 구독중인 컴포넌트들은 자동으로 갱신된다
    if(username===undefined)
        return;
    
  return username? element : <Navigate to="/member/login" />
}

export default PrivateRoute