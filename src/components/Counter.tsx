import { FC } from 'react'

type CounterPropsType = {
  className: string
  counter: number
}

export const Counter: FC<CounterPropsType> = ({ className, counter }) => {
  return <div className={className}>{counter}</div>
}
