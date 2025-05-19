import React from 'react'
import Todo from './Todo'

function TodoList({todos, remove, toggle}) {
  return (
    <>
    <table className='table table-hover'>
        <thead style={{ textAlign:'center' }}>
            <tr>
                <th>할일</th>
                <th>마감일</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
            todos.map(todo=><Todo todo={todo} remove={remove} toggle={toggle} />)
        }
        </tbody>
    </table>
    </>
  )
}

export default TodoList