import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FaTrash } from 'react-icons/fa';

const ResetForm = () => {
  const {reset} = useFormContext()

  return (
    <button className='reset' onClick={()=>reset()} >
        <FaTrash/>
    </button>

  )
}

export default ResetForm