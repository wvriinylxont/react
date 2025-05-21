import React from 'react'

function FormField({name, label, onChange, onBlur , message}) {
  return (
    <div className='mt-3 mb-3'>
            <label htmlFor={name} className='form-label'>{label}:</label>
            <input type='text' className='form-control' name={name} onChange={onChange} onBlur={onBlur} />
            {message!=='' && <span style={{color:'red'}}>{message}</span>}
    </div>
  )
}

export default FormField