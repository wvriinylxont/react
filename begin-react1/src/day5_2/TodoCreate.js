import React from 'react'

function TodoCreate({create, change, title, deadline}) {
  return (
    <table className='table table-border'>
        <tbody>
            <tr>
                <td>
                    <input type='text' name='title' placeholder='할일 입력' className="form-control" onChange={change} value={title} />
                    <input type='date' name='deadline' placeholder='마감일 입력' className="form-control" onChange={change} value={deadline} />
                </td>
            </tr>
        </tbody>
        <div class="d-grid">
            <button onClick={create} type="button" className="btn btn-primary btn-block">추가</button>
        </div>
    </table>
  )
}

export default TodoCreate