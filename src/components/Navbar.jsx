import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4">

      {/* Left - Brand */}
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-primary">
          🧸 ToyTopia
        </Link>
      </div>

      {/* Center - Nav Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-primary font-bold' : 'font-semibold'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-primary font-bold' : 'font-semibold'
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right - Login Button */}
      <div className="navbar-end">
        <Link to="/login" className="btn btn-primary btn-sm">
          Login
        </Link>
      </div>

    </div>
  )
}

export default Navbar