import { FC, useEffect, useState } from 'react'
import { Button } from './button/Button'

type CounterPropsType = {
  count: number
  maxValue: number
  startValue: number
  increment: () => void
  getFromLocalStorage: () => void
}

export const Counter: FC<CounterPropsType> = (props) => {
  const { count, maxValue, startValue, increment, getFromLocalStorage } = props

  return (
    <div className="counter-body">
      <div className={`counter ${count === maxValue && 'counter-max'}`}>
        {count}
      </div>
      <div className="counter-btns">
        <Button
          title={'inc'}
          disabled={count === maxValue}
          onClick={increment}
        />
        <Button
          title={'reset'}
          disabled={count <= startValue}
          onClick={getFromLocalStorage}
        />
      </div>
    </div>
  )
}
