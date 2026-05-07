import { Link } from "react-router-dom"

const PokemonCard = ({ name, url}) => {

  const getIdFromUrl = (url) => {
    const id = url.split('/')[url.split('/').length - 2]
    return id
  }

  console.log(name, url)
  return (
    <>
      <Link to={`/pokemon/${name}`} className="block bg-white rounded-xl shadow hover:shadow-lg hover:translate-y-1 transition p-4 text-center">
        {/* <h2>Pokemon Card Component</h2> */}
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${getIdFromUrl(url)}.gif`} alt={name} />
        <h3 className="capitalize font-semibold text-lg">{name}</h3>
      </Link>
    </>
  )
}

export default PokemonCard