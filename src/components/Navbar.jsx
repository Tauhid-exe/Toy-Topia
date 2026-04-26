import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (err) {
      console.error(err)
    }
  }

  const navLinks = (
    <>
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
      {user && (
        <li>
          <NavLink
            to="/my-profile"
            className={({ isActive }) =>
              isActive ? 'text-primary font-bold' : 'font-semibold'
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  )

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4">

      {/* Mobile hamburger */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>

        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-primary hidden lg:flex">
          🧸 ToyTopia
        </Link>
      </div>

      {/* Desktop nav links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {navLinks}
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end gap-3">
        {user ? (
          <>
            {/* Avatar with tooltip showing name */}
            <div className="tooltip tooltip-bottom" data-tip={user.displayName || user.email}>
              <div className="avatar cursor-pointer">
                <div className="w-10 rounded-full ring ring-primary ring-offset-2">
                  <img
                    src={user.photoURL || `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${user.email}`}
                    alt="User avatar"
                  />
                </div>
              </div>
            </div>

            {/* Logout button */}
            <button onClick={handleLogout} className="btn btn-outline btn-primary btn-sm">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        )}
      </div>

    </div>
  )
}

export default Navbar