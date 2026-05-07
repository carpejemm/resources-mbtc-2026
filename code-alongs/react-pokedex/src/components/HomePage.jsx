import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h2>Home Page</h2>
      <p>Welcome to the React Pokedex! Explore the world of Pokémon and discover their unique characteristics, abilities, and types. Whether you're a seasoned trainer or just starting your journey, our Pokedex is your ultimate companion for all things Pokémon. Dive in and start your adventure today!</p>
      <Link to="/pokedex" className="text-blue-500 hover:underline">Go to Pokedex</Link>
    </>
  )
}

export default HomePage