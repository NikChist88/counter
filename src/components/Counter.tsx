import { FC, useEffect, useState } from 'react'
import { Button } from './button/Button'

type CounterPropsType = {
  count: number
  maxValue: number
  startValue: number
  lockButton: boolean
  incCount: () => void
  resetCount: () => void
}

export const Counter: FC<CounterPropsType> = (props) => {
  const {
    count,
    maxValue,
    startValue,
    lockButton,
    incCount,
    resetCount,
  } = props

  const [message, setMessage] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    if (maxValue < 0 || startValue < 0) {
      setMessage('Incorrect value!')
      setError(true)
    } else {
      setMessage('Enter values and press "set"')
      setError(false)
    }
  }, [maxValue, startValue])

  return (
    <div className="counter-body">
      <div className={`counter`}>
        <span className={error ? 'error' : ''}>
          {lockButton ? message : count}
        </span>
      </div>
      <div className="counter-btns">
        <Button
          title={'inc'}
          disabled={lockButton || count === maxValue}
          onClick={incCount}
        />
        <Button title={'reset'} disabled={lockButton} onClick={resetCount} />
      </div>
    </div>
  )
}
