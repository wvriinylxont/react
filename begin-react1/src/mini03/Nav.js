import React from 'react'

function Nav() {
  return (
    <nav>
        <ul>
            <li><a href='/'>HOME</a></li>
            <li><a href='/supply/list'>비품</a></li>
            <li><a href='/contact/list'>연락처</a></li>
            <li><a href='/todo/list'>할일</a></li>
        </ul>
    </nav>
  )
}

export default Nav