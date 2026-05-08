import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h2>Counter Component</h2>
      <p data-testid="counter-value">Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ padding: '10px', margin: '5px' }}>Increment
      </button>
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ padding: '10px', margin: '5px' }}>Decrement
      </button>
    </>
  )
}

export default Counter