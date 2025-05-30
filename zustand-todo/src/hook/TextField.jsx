import React from 'react'

function TextField({label, name, field}) {
    const {value, message, change, check} = field;
  return (
    <div className='mt-3 mb-3'>
        <label htmlFor={name} className='form-label'>{label}:</label>
        <textarea name={name} className='form-control' onChange={change} onBlur={check} value={value} rows={5} />
        {message!=='' && <span style={{color:'red'}}>{message}</span>}
    </div>
  )
}

export default TextField