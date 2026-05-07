import { useState, useReducer } from 'react'

const initialState = [
  { id: 1, task: 'Learn React', completed: true },
  { id: 2, task: 'Build a React App', completed: false },
  { id: 3, task: 'Master React Hooks', completed: false }
]

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: state.length + 1, task: action.payload, completed: false }];
    case 'TOGGLE_TASK':
      return 'Testing';
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
}


const UseReducerComponent = () => {

  // const deeplyNestedObject = {
  //   name: 'John Doe',
  //   age: 30,
  //   address: {
  //     street: '123 Main St',
  //     city: 'Anytown',
  //     country: 'USA',
  //     postalCode: {
  //       code: '12345',
  //       area: 'Downtown',
  //       otherDetails: {
  //         landmark: 'Near the park',
  //         coordinates: {
  //           lat: 40.7128,
  //           lng: -74.0060
  //         }
  //       }
  //     }
  //   },
  //   hobbies: ['reading', 'traveling', 'cooking']
  // }

  // const arrayOfComplexObjects = [
  //   {
  //     id: 1,
  //     name: 'Alice',
  //     details: {
  //       age: 25,
  //       address: {
  //         street: '456 Elm St',
  //         city: 'Othertown',
  //         country: 'USA'
  //       }
  //     }
  //   },
  //   {
  //     id: 2,
  //     name: 'Bob',
  //     details: {
  //       age: 28,
  //       address: {
  //         street: '789 Oak St',
  //         city: 'Sometown',
  //         country: 'USA'
  //       }
  //     }
  //   }
  // ]

  const [todoList, dispatch] = useReducer(reducerFunction, initialState);
  // todoList is the state variable that holds the current state of our todo list
  // dispatch is the function we use to send actions to our reducer function to update the state
  // userReducer() hook - takes in a reducer function and an initial state, and returns the current state and a dispatch function to update that state based on actions sent to the reducer function
  // useReducer takes in two arguments: the reducer function and the initial state

  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    dispatch({ type: 'ADD_TASK', payload: newTask });
    setNewTask('');
  }

  const handleRemoveTask = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  }


  return (
    <div className="usereducer-component">
      <h1>UseReducerComponent</h1>
      <h2>My To Do List</h2>
      <ul>
        {todoList.map(task => (
          <li key={task.id}>
            {task.task} {task.completed ? "(Completed)" : "(Incomplete)"}
            <button onClick={() => handleRemoveTask(task.id)}>
              Remove
            </button>
          </li>
        ))}

        {/* If the array is empty, display a message saying "No tasks available" */}
        {todoList.length === 0 && <p>No tasks available</p>}
      </ul>

      {/* Create a form to add new tasks to the todo list */}

      <input 
        type="text" 
        placeholder="New Task" 
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default UseReducerComponent;