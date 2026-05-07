import { useState } from 'react'

const UseStateComponent = () => {
  const [points, setPoints] = useState(0)
  // points is the state variable
  // points holds the current value of the state, which is initialized to 0
  // setPoints - our updater function, which we can use to update the value of points
  // useState is a hook that allows us to add state to our functional components. It returns an array with two elements: the current state value and a function to update that state.
  // Inside the useState() function, we pass the initial value of the state, which is 0 in this case. This means that when the component first renders, points will be set to 0.

  return (
    <>
      <h2>UseStateComponent</h2>
      <p>Points: {points}</p>
      <button onClick={() => setPoints(points + 1)}>Add Point</button>
      <button onClick={() => setPoints(points - 1)}>Subtract Point</button>
    </>
  )
}

export default UseStateComponent