import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-900 text-white px-6 py-3 flex items-center gap-6 shadow-md">
        <span className="font-bold text-lg tracking-wide">Pokédex</span>
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/pokedex" className="hover:underline">Pokédex</Link>
      </nav>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout