import '../input/Input.styles.css'
import { ChangeEvent, FC, useState } from 'react'

type InputPropsType = {
  value: number
  onChange: (value: number) => void
}

export const Input: FC<InputPropsType> = ({ value, onChange }) => {
  
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.currentTarget.value))
  }

  return (
    <input
      className="input"
      type="number"
      value={value}
      onChange={onChangeHandler}
    />
  )
}
