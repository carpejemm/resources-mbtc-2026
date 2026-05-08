import Button from "./components/Button"
import Counter from "./components/Counter"
import './App.css'

const App = () => {

  const handleClick = () => {
    console.log("Button clicked!")
  }

  // const arrayOfButtonDetails = [
  //   { id: 1, label: "Button 1" },
  //   { id: 2, label: "Button 2" },
  //   { id: 3, label: "Button 3" },
  // ]

  return (
    <>
      <h1>React Unit Testing with Vitest</h1>
      {/* {
        arrayOfButtonDetails.map(button => (
          <Button key={button.id} onClick={handleClick} label={button.label} />
        ))
      } */}
      <Button onClick={handleClick} label="Click me"></Button>
      <Counter />
    </>
  )
}

export default App
