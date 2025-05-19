import React from 'react'
import User from './User'

function UserList({users, remove, toggle}) {
  return (
    <ul>
        {
            users.map(user=><User user={user} remove={remove} toggle={toggle} />)
        }
    </ul>
  )
}

export default UserList