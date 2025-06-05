import React, { useEffect } from 'react'
import useMemberStore from '../../stores/useMemberStore'
import { useNavigate } from 'react-router-dom';

function MemberRead() {
    const isPasswordVerified = useMemberStore(state=> state.isPasswordVerified);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!isPasswordVerified) {
            navigate("/member/check-password");
            return;
        }
    }, [isPasswordVerified]) 
    
  return (
    <div>MemberRead</div>
  )
}

export default MemberRead