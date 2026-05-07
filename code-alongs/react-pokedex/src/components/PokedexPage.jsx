import { useFetch } from "../hooks/useFetch"
import PokemonCard from "./PokemonCard"

const PokedexPage = () => {

  // This is a custom hook that we created to fetch data from the API
  const { data, loading, error } = useFetch('/pokemon?limit=20')

  if (loading) return <p className="text-center text-gray-500 py-10">Loading…</p>
  if (error) return <p className="text-center text-red-600 py-10">Error: {error.message}</p>


  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Pokédex</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.results.map((p) => (
          <PokemonCard key={p.name} name={p.name} url={p.url} />
        ))}
      </div>
    </div>
  )
}

export default PokedexPage