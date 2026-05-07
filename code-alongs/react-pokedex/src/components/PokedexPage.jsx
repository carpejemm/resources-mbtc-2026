import { useFetch } from "../hooks/useFetch"
import PokemonCard from "./PokemonCard"

const PokedexPage = () => {

  // This is a custom hook that we created to fetch data from the API
  const { data, loading, error } = useFetch('/pokemon?limit=20')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>


  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">React Pokédex</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {
          data.results.map(pokemon => (
            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))
        }
      </div>
      
    </div>
  )
}

export default PokedexPage