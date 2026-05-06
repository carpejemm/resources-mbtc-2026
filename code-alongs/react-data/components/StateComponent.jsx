import { useState } from 'react'

const StateComponent = () => {

  // count - is the current state value, initialized to 0.
  // setCount - updater function that allows us to update the count state.
  // const count = 0; // This is a regular variable, not state. It won't trigger re-renders when updated.
  // const setCount = (newCount) => { count = newCount; } // This is a regular function, not a state updater. It won't trigger re-renders when called.
  const [count, setCount] = useState(0);

  // useState() - React Hook that allows us to manage our state or data in our component. 
  // It returns an array with two elements: the current state value and a function to update that state.

  const handleDecrement = () => {
    setCount(count - 1);
  }


  return (
    <>
      <div className="state-component">
        <h2>State Component</h2>
        <p>This is the State Component.</p>
        <p>State is a built-in React object that is used to contain data or information about the component.</p>
        <p>useState is a React Hook that allows you to add React state to functional components.</p>
        <p>React Hooks - Hooks are functions that let you "hook into" React state and lifecycle features from function components.</p>
        <div>
          <h3>Counter Example</h3>
          <p>Current Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
      
    </>
  )
}

export default StateComponent