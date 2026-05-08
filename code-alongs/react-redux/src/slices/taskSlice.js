// We're importing the createSlice function from the Redux Toolkit library. This function allows us to create a slice of our Redux state, which includes the initial state, reducers, and actions for that slice.
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, title: 'Task 1', completed: true },
  { id: 2, title: 'Task 2', completed: false },
  { id: 3, title: 'Task 3', completed: false },
]

const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const newTaskObj = {
        id: state.length + 1,
        title: action.payload,
        completed: false
      }
      state.push(newTaskObj)
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload)
    }
  }
})

export const { addTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer