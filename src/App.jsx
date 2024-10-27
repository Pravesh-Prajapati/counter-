import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  }
  return (
    <>
      <div className="counter-wrapper">
        <div className="counter-container">
          <h1 className="counter-title">Counter App</h1>

          <div className="counter-display">
            {count}
          </div>

          <div className="counter-controls">
            <button
              className="counter-button decrement"
              onClick={decrement}
              aria-label="Decrease count"
            >
              -
            </button>

            <button
              className="counter-button reset"
              onClick={reset}
              aria-label="Reset count"
            >
              Reset
            </button>

            <button
              className="counter-button increment"
              onClick={increment}
              aria-label="Increase count"
            >
              +
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
