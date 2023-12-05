import './App.css'
import { FC, useState } from 'react'
import { Counter } from './components/Counter'
import { CounterSet } from './components/CounterSet'

export const App: FC = () => {
  const [count, setCount] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0)
  const [startValue, setStartValue] = useState<number>(0)

  const increment = () => {
    setCount(count + 1)
  }

  const maxValueHandler = (value: number) => {
    setMaxValue(value)
  }

  const startValueHandler = (value: number) => {
    setStartValue(value)
  }

  const setToLocalStorage = () => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('startValue', JSON.stringify(startValue))
    setCount(startValue)
  }

  const getFromLocalStorage = () => {
    const value = localStorage.getItem('startValue')
    if (value) {
      setCount(JSON.parse(value))
    }
  }

  return (
    <div className="wrapper">
      <CounterSet
        maxValue={maxValue}
        startValue={startValue}
        maxValueHandler={maxValueHandler}
        startValueHandler={startValueHandler}
        setToLocalStorage={setToLocalStorage}
      />
      <Counter
        count={count}
        maxValue={maxValue}
        startValue={startValue}
        increment={increment}
        getFromLocalStorage={getFromLocalStorage}
      />
    </div>
  )
}
