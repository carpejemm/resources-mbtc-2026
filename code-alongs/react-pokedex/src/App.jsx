import { Routes, Route } from 'react-router-dom'
import PokedexPage from './components/PokedexPage'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import PokemonDetailPage from './components/PokemonDetailPage'

import './App.css'

const App = () => {

  return (
    <>
      {/* <h1 className='text-4xl font-bold bg-red-800'>React Pokedex</h1>
      <p className='text-yellow-800'>Hello world</p>

      <div className='border-2 border-solid border-green-800'>
        This is a div
      </div> */}

      {/* This is an inline css */}
      {/* <div style={{ color: 'yellow' }}>Yellow Color</div> */}
      {/* <PokedexPage /> */}

      <Routes>
        <Route>
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="/pokedex" element={<PokedexPage />} />
            <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
