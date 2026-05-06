import PropsComponent from '../components/PropsComponent'
import StateComponent from '../components/StateComponent'
import EventsComponent from '../components/EventsComponent'
import ConditionalsComponent from '../components/ConditionalsComponent'
import './App.css'

const App = () => {

  return (
    <>
      <h1>React Data</h1>
      <ul>
        <li>Props</li>
        <li>State</li>
        <li>Events</li>
        <li>Two way Binding</li>
        <li>Conditionals</li>
      </ul>
      <ConditionalsComponent />
      <EventsComponent />
      <StateComponent />
      <PropsComponent />
      
    </>
  )
}

export default App
