import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import styles from "./input.module.css"

type Props = {placeholder: string, autocomplete?: string[]}

const InputField: FC<Props> = ({placeholder, autocomplete}) => {
  const { register } = useFormContext()
  
  return (
    <>
    <div className={styles.inputContainer} >
        <input className={styles.input} list={placeholder} placeholder={placeholder} {...register(placeholder)} />
    </div>
      {autocomplete?.length ? (
        <datalist id={placeholder} >
          {autocomplete.map(op => <option value={op} key={op}></option> )}
        </datalist>
      )
      : null}
    </>
    
  )
}

export default InputField