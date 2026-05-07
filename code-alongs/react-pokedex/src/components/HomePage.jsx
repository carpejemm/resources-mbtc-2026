import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 gap-6">
      <div className="text-8xl">🎮</div>
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100">Pokédex</h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-sm text-lg">
        Gotta catch 'em all. Explore over 1,000 Pokémon and discover their types, stats, and more.
      </p>
      <Link
        to="/pokedex"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition"
      >
        Go to Pokédex →
      </Link>
    </div>
  )
}

export default HomePage