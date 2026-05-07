import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const PokemonDetailPage = () => {

  // useParams is a hook that allows us to access the parameters of the current route. In this case, we are accessing the id and name parameters from the URL.
  const { id, name } = useParams()

  const { data, loading, error } = useFetch(`/pokemon/${name}`)

  console.log("data", data)

  if(loading) return <div>Loading...</div>

  if (error) {
    return <div>Error: {error.message}</div>
  }


  return (
    <>
      <h2>Pokemon Detail Page</h2>
      <img className="mx-auto" src={data.sprites.other['showdown'].front_default} alt={name} />
      <h3 className="capitalize text-3xl font-bold ">{name}</h3>
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
      <p>Types: {data.types.map(type => type.type.name).join(', ')}</p>
      <Link to="/pokedex" className="text-blue-500 hover:underline">Back to Pokedex</Link>
    </>
  )
}

export default PokemonDetailPage