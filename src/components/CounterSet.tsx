import { FC, useEffect } from 'react'
import { Button } from './button/Button'
import { Input } from './input/Input'

type CounterSetPropsType = {
  maxValue: number
  startValue: number
  lockButton: boolean
  maxValueHandler: (value: number) => void
  startValueHandler: (value: number) => void
  setToLocalStorage: () => void
}

export const CounterSet: FC<CounterSetPropsType> = (props) => {
  const {
    maxValue,
    startValue,
    lockButton,
    maxValueHandler,
    startValueHandler,
    setToLocalStorage,
  } = props

  return (
    <div className="counter-set">
      <div className="counter-set-values">
        <div className="counter-set-value">
          <h3 className="counter-set-label">max value:</h3>
          <Input value={maxValue} onChange={maxValueHandler} />
        </div>
        <div className="counter-set-value">
          <h3 className="counter-set-label">start value:</h3>
          <Input value={startValue} onChange={startValueHandler} />
        </div>
      </div>
      <div className="counter-set-button">
        <Button
          title={'set'}
          onClick={setToLocalStorage}
          disabled={!lockButton}
        />
      </div>
    </div>
  )
}
