import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FaWindowClose } from 'react-icons/fa';

const ResetButton = () => {
  const { resetField } = useFormContext()

  return (
    <button className='reset' onClick={()=>resetField("Plan")} >
        <FaWindowClose/>
    </button>

  )
}

export default ResetButton