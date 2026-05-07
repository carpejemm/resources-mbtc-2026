import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      {/* Outlet in react-router is used to render the matched child route component. It serves as a placeholder for where the child routes will be rendered in the parent route's component hierarchy. When a child route is matched, its component will be rendered in place of the <Outlet /> component in the parent route's layout. */}
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout