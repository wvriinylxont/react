import React from 'react'

function InputField({label, name, type='text', field}) {
    const {value, message, change, check} = field;
  return (
    <div className='mt-3 mb-3'>
        <label htmlFor={name} className='form-label'>{label}:</label>
        <input type={type} name={name} className='form-control' onChange={change} onBlur={check} value={value} />
        {message!=='' && <span style={{color:'red'}}>{message}</span>}
    </div>
  )
}

export default InputField