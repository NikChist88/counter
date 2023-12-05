import '../button/Button.styles.css'
import { FC } from 'react'

type ButtonPropsType = {
  title?: string
  disabled?: boolean
  onClick: () => void
}

export const Button: FC<ButtonPropsType> = ({ title, disabled, onClick }) => {
  const onClickHandler = () => {
    onClick()
  }

  return (
    <button className={'button'} disabled={disabled} onClick={onClickHandler}>
      {title}
    </button>
  )
}
