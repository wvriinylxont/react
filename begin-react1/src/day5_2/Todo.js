import React from 'react'

function Todo({todo, remove, toggle}) {
  return (
    <tr>
        <td style={{ color: todo.active ? "green" : "black", cursor:'pointer', textAlign:'center' }} onClick={()=>toggle(todo.id)}>
            {`${todo.title} (${todo.deadline})`}
        </td>
        <td style={{ textAlign:'center' }}>
            <button onClick={()=>remove(todo.id)} type="button" className="btn btn-danger">삭제</button>
        </td>
        <td></td>
    </tr>
  )
}

export default Todo