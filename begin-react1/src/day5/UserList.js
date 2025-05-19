import React from 'react'
import User from './User';

function UserList({users, onRemove}) {
  return (
    <>
    <table className='table table-border'>
        <thead>
            <tr>
                <th>이름</th>
                <th>이메일</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {/* Props Drilling */}
            {
                users.map(user=><User key={user.id} user={user} onRemove={onRemove} />)
            }
        </tbody>
    </table>
    </>
  )
}

export default UserList