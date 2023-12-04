import './App.css'
import { FC, useState } from 'react'
import { Counter } from './components/Counter'
import { Button } from './components/Button'

export const App: FC = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="wrapper">
      <Counter
        className={`counter ${counter > 4 && 'counter-max'}`}
        counter={counter}
      />
      <div className="counter-btns">
        <Button
          className={'counter-btn'}
          title={'inc'}
          disabled={counter > 4}
          onClick={() => setCounter((counter) => counter + 1)}
        />
        <Button
          className={'counter-btn'}
          title={'reset'}
          disabled={counter === 0}
          onClick={() => setCounter(0)}
        />
      </div>
    </div>
  )
}
