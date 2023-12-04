import { FC } from 'react'

type ButtonPropsType = {
  className: string
  title: string
  disabled: boolean
  onClick: () => void
}

export const Button: FC<ButtonPropsType> = ({
  className,
  title,
  disabled,
  onClick,
}) => {

  const onClickHandler = () => {
    onClick()
  }

  return (
    <button className={className} disabled={disabled} onClick={onClickHandler}>
      {title}
    </button>
  )
}
