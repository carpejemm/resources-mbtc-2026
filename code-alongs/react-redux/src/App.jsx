import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdDeleteOutline } from "react-icons/md";
import './App.css'

const App = () => {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()


  // const [tasks, setTasks] = useState([
  //   { id: 1, title: 'Task 1', completed: true },
  //   { id: 2, title: 'Task 2', completed: false },
  //   { id: 3, title: 'Task 3', completed: false },
  // ])

  const [newTask, setNewTask] = useState('')
  console.log(newTask)

  const handleAddTask = () => {
    if (newTask.trim() === '') return

    // const newTaskObj = {
    //   id: tasks.length + 1,
    //   title: newTask,
    //   completed: false
    // }

    // setTasks([...tasks, newTaskObj])
    // setNewTask('')
    dispatch({ type: 'tasks/addTask', payload: newTask })
    setNewTask('')
  }

  const handleDeleteTask = (id) => {
    dispatch({ type: 'tasks/deleteTask', payload: id })
  }

  return (
    <>
      <h1>React Redux and Redux Toolkit</h1>

      

      <div>
        <input 
          type="text" 
          placeholder='Add Task Here'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <h2>Task List:</h2>
      {
        tasks.map(task => (
          <div key={task.id}>
            <p>{task.title}</p>
            <span>Status: {task.completed ? 'Completed' : 'Incomplete'}</span>
            {/* We need to pass the task id to the handleDeleteTask function to know which task to delete */}
            <button onClick={() => handleDeleteTask(task.id)}><MdDeleteOutline /></button>
          </div>
        ))
      }
      {
        tasks.length === 0 && <p>No tasks available. Please add some tasks.</p>
      }
    </>
  )
}

export default App

// Step 1 - Create a new file called store.js in the src directory. This file will contain our Redux store, reducers, and actions.
// Step 2 - Create new file called taskSlice.js in the src directory. This file will contain our task slice which will manage the state of our tasks.
// Step 3 - In store.js, let's create our Redux store using the configureStore function from Redux Toolkit and import our task slice reducer to include it in the store.
// Step 4 - In main.jsx, we need to wrap our App component with the Provider component from react-redux and pass our store as a prop to it. This will allow us to access the Redux store from any component in our application.
// Step 5 - Refactor App.jsx - In App.jsx, we will use the useSelector hook from react-redux to access the tasks state from our Redux store and display it in our component. We will also use the useDispatch hook to dispatch actions to add new tasks to our store when the user clicks the "Add Task" button.
// Step 6 - Add logic to our taskSlice to handle adding new tasks to our state when the addTask action is dispatched. This will allow us to update our Redux store with new tasks and see the changes reflected in our UI.

