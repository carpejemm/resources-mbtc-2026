// This is the store.js file where we will create our Redux store and define our reducers and actions.

// Importing the configureStore function from Redux Toolkit to create our store.
import { configureStore } from '@reduxjs/toolkit'

// Importing the taskReducer from our taskSlice file to include it in our store.
import taskReducer from './slices/taskSlice'
// import userReducer from './slices/userSlice'

// Creating the Redux store and including our taskReducer in the store configuration.

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    // users: userReducer,
  }
})

export default store