// import our component from the file path where it is located.
import Task from './components/Task'
import SampleComponent from './components/SampleComponent'
import Profile from './components/Profile'

import './App.css'
// This is a simple React component that renders a heading with the text "Hello World!".
const App = () => {
  return (
    <>
    <h1>Hello World!</h1>
    {/* This is a comment in JSX, which will not be rendered in the DOM. */}
    <Task />
    <Task />
    <Task />
    <SampleComponent />
    <Profile />
    </>
  )
}

export default App
