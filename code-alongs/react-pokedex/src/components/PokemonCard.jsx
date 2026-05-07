import { Link } from "react-router-dom"

const PokemonCard = ({ name, url}) => {

  const getIdFromUrl = (url) => {
    const id = url.split('/')[url.split('/').length - 2]
    return id
  }

  const id = getIdFromUrl(url)

  return (
    <Link
      to={`/pokemon/${name}`}
      className="flex flex-col items-center gap-1 bg-white dark:bg-gray-800 dark:text-gray-100 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition p-4 h-36"
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={name}
        className="w-20 h-20 object-contain"
      />
      <h3 className="capitalize font-semibold text-sm">{name}</h3>
      <p className="text-xs text-gray-400">#{String(id).padStart(3, '0')}</p>
    </Link>
  )
}

export default PokemonCard