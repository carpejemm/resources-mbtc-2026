import UseStateComponent from './components/UseStateComponent'
import UseEffectComponent from './components/UseEffectComponent'
import UseContextComponent from './components/UseContext/UseContextComponent'
import './App.css'
import UseReducerComponent from './components/UseReducerComponent'

const App = () => {
  return (
    <>
      <h1>React Hooks</h1>
      <UseStateComponent />
      <UseEffectComponent />
      <UseContextComponent />
      <UseReducerComponent />
    </>
  )
}

export default App
