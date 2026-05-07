import { useState, useEffect } from 'react'
import AnotherComponent from './AnotherComponent'

const UseEffectComponent = () => {
  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState('')
  const [showMessage, setShowMessage] = useState(false)

  // This useEffect() will be called every time the component renders, which includes the initial render and every subsequent re-render caused by state updates (like when count changes).
  useEffect(() => {
    console.log('useEffect() has been called!')
  })

  // This useEffect() will only be called once, right after the initial render of the component, because it has an empty dependency array. It will not be called on subsequent re-renders.
  // [] - dependency array - tells React to only run this effect once, after the initial render. If you include variables in the dependency array, the effect will run again whenever those variables change.
  useEffect(() => {
    console.log('This useEffect() will only be called once, after the initial render!')
  }, [])

  useEffect(() => {
    console.log('This useEffect() will be called after the initial render and every time the firstName state variable changes!')
  }, [firstName, count, showMessage]) // This useEffect() will be called after the initial render and every time the firstName state variable changes. It will not be called when count changes.

  // This useEffect() will be called if the component unmounts, which can happen if the component is removed from the DOM. The cleanup function returned by this useEffect() will be executed during the unmounting phase.
  // Let's use the Another Component to demonstrate the unmounting behavior. When we toggle the showMessage state, it will conditionally render the message and the AnotherComponent. When we toggle it off, the AnotherComponent will unmount, triggering the cleanup function in this useEffect().
  // useEffect(() => {
  //   return () => {
  //     console.log('Component is unmounting!')
  //   }
  // }, [])

  return (
    <>
      <div className="useeffect-component">
        <h2>useEffect() Component</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <button onClick={() => setCount(count - 1)}>Decrement Count</button>
        <br />
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
        />

        <br />

        <button onClick={() => setShowMessage(!showMessage)}>Toggle Message</button>
        {
          showMessage && 
          <>
            <p>Hello, {firstName || 'Stranger'}!</p>
            <AnotherComponent />
          </>
        }
      </div>
    </>
  )
}

export default UseEffectComponent