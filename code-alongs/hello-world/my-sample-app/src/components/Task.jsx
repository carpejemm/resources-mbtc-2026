import TrainosysIcon from "./TrainosysIcon"

// This is a arrow function component named Task.
const Task = () => {
  return (
    // <> // This is call empty JSX fragment, which is used to group multiple elements without adding extra nodes to the DOM.
    
    // </>
    <>
      <div className="task-container">
        <div>
          <h3>Task Title</h3>
          <p>Task description goes here.</p>
        </div>

        <input type="text" />
        <TrainosysIcon size="50px" />
      </div>
    </>
  )
}

export default Task