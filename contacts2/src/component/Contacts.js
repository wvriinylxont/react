import React from 'react'
import { Link } from 'react-router-dom'

function Contacts({contacts}) {
  return (
    <table className='table table-hover'>
        <thead>
            <tr>
                <th>번호</th>
                <th>이름</th>
                <th>주소</th>
                <th>연락처</th>
            </tr>
        </thead>
        <tbody>
            {
                contacts.map((c,i)=>{
                    return (
                        <tr key={i}>
                            <td>{c.no}</td>
                            <td>
                                <Link to={`/read?no=${c.no}`}>{c.name}</Link>
                            </td>
                            <td>{c.address}</td>
                            <td>{c.tel}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}

export default Contacts