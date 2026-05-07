import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pokedex">Pokédex Page</Link>
        <Link to="/about">About Page</Link>
      </nav>

      <main>
        <Outlet />
      </main>
      
    </div>
  )
}

export default Layout