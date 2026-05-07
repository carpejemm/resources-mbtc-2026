import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const API_USERS = 'https://jsonplaceholder.typicode.com/users'
const API_POSTS = 'https://jsonplaceholder.typicode.com/posts?_limit=5'

const App = () => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  console.log('Users:', users)
  console.log('Posts:', posts)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_USERS)
        const data = await response.json()
        console.log(data)
        setUsers(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()

    const fetchPosts = async () => {
      try {
        const response = await axios.get(API_POSTS)
        const data = response.data
        console.log(data)
        setPosts(data)
      } catch (error) {
        console.log('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <>
      <h2>React Fetch API with Axios | CRUD</h2>
      <h3>Users List</h3>
      {
        users.length > 0 ? (
          <ul>
            {
              users.map(user => (
                <li key={user.id}>{user.name} - {user.email}</li>
              ))
            }
          </ul>
        ) : (
          <p>Loading users...</p>
        )
      }

      <h3>Post List</h3>
      {
        posts.length >0 ? (
          <ul>
            {
              posts.map(post => (
                <li key={post.id}>{post.title}</li>
              ))
            }
          </ul>
        ) : (
          <p>Loading posts...</p>
        )
      }
    </>
  )
}

export default App
