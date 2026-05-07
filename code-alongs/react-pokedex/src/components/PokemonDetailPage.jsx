import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const typeColors = {
  fire: 'bg-red-400 text-white',
  water: 'bg-blue-400 text-white',
  grass: 'bg-green-500 text-white',
  electric: 'bg-yellow-300 text-black',
  psychic: 'bg-pink-400 text-white',
  ice: 'bg-cyan-300 text-black',
  dragon: 'bg-indigo-600 text-white',
  dark: 'bg-gray-700 text-white',
  fighting: 'bg-red-700 text-white',
  poison: 'bg-purple-500 text-white',
  ground: 'bg-yellow-600 text-white',
  rock: 'bg-yellow-700 text-white',
  bug: 'bg-lime-500 text-white',
  ghost: 'bg-purple-700 text-white',
  steel: 'bg-slate-400 text-white',
  normal: 'bg-gray-400 text-white',
  fairy: 'bg-pink-300 text-black',
  flying: 'bg-sky-400 text-white',
}

function PokemonDetailPage() {
  const { name } = useParams()
  const { data: pokemon, loading, error } = useFetch(`/pokemon/${name}`)

  if (loading) return <p className="text-center text-gray-500 py-10">Loading {name}…</p>
  if (error)
    return (
      <div className="p-4 space-y-2">
        <p className="text-red-600">Error: {error}</p>
        <Link to="/pokedex" className="text-blue-600 hover:underline">
          &larr; Back to Pokédex
        </Link>
      </div>
    )
  if (!pokemon) return null

  return (
    <article className="bg-white dark:bg-gray-800 dark:text-gray-100 rounded-xl shadow p-6 max-w-md mx-auto text-center space-y-3">
      <Link
        to="/pokedex"
        className="text-sm text-blue-600 hover:underline block text-left"
      >
        &larr; Back
      </Link>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`}
        alt={pokemon.name}
        className="w-48 h-48 block mx-auto object-contain"
      />
      <h1 className="capitalize text-3xl font-bold">{pokemon.name}</h1>
      <p className="text-gray-500">#{String(pokemon.id).padStart(3, '0')}</p>
      <div className="flex justify-center gap-2">
        {pokemon.types.map((t) => (
          <span
            key={t.type.name}
            className={`px-3 py-1 rounded-full capitalize text-sm ${typeColors[t.type.name] ?? 'bg-slate-200'}`}
          >
            {t.type.name}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 text-sm">
        <p>Height: {pokemon.height / 10} m</p>
        <p>Weight: {pokemon.weight / 10} kg</p>
      </div>
      <div className="grid grid-cols-2 text-sm">
        {pokemon.stats.slice(0, 4).map((s) => (
          <p key={s.stat.name} className="capitalize">
            {s.stat.name}: <strong>{s.base_stat}</strong>
          </p>
        ))}
      </div>
    </article>
  )
}

export default PokemonDetailPage
