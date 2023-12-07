import './App.css'
import { FC, useState, useEffect } from 'react'
import { Counter } from './components/Counter'
import { CounterSet } from './components/CounterSet'

export const App: FC = () => {
  const [count, setCount] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0)
  const [startValue, setStartValue] = useState<number>(0)
  const [lockButton, setLockButton] = useState<boolean>(true)

  useEffect(() => {
    getFromLocalStorage()
    setLockButton(false)
  }, [])

  const incCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(startValue)
  }

  const maxValueHandler = (value: number) => {
    setMaxValue(value)
    setLockButton(true)
  }

  const startValueHandler = (value: number) => {
    setStartValue(value)
    setLockButton(true)
  }

  const setToLocalStorage = () => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('startValue', JSON.stringify(startValue))
    setCount(startValue)
    setLockButton(false)
  }

  const getFromLocalStorage = () => {
    const maxValue = localStorage.getItem('maxValue')
    const startValue = localStorage.getItem('startValue')
    if (maxValue && startValue) {
      setMaxValue(JSON.parse(maxValue))
      setStartValue(JSON.parse(startValue))
      setCount(JSON.parse(startValue))
    }
  }

  return (
    <div className="wrapper">
      <CounterSet
        maxValue={maxValue}
        startValue={startValue}
        lockButton={lockButton}
        maxValueHandler={maxValueHandler}
        startValueHandler={startValueHandler}
        setToLocalStorage={setToLocalStorage}
      />
      <Counter
        count={count}
        maxValue={maxValue}
        startValue={startValue}
        lockButton={lockButton}
        incCount={incCount}
        resetCount={resetCount}
      />
    </div>
  )
}
