import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content mt-auto">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">🧸 ToyTopia</h2>
          <p className="text-sm opacity-70">
            Your local kids toy paradise. Discover handpicked toys from trusted local sellers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg mb-1">Quick Links</h3>
          <Link to="/" className="link link-hover text-sm">Home</Link>
          <Link to="/all-toys" className="link link-hover text-sm">All Toys</Link>
          <Link to="/my-profile" className="link link-hover text-sm">My Profile</Link>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg mb-1">Legal</h3>
          <a href="#" className="link link-hover text-sm">Terms & Conditions</a>
          <a href="#" className="link link-hover text-sm">Privacy Policy</a>
          <a href="#" className="link link-hover text-sm">Contact Us</a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-content/10 py-4 text-center text-sm opacity-50">
        © {new Date().getFullYear()} ToyTopia. Made with ❤️ for little explorers.
      </div>

    </footer>
  )
}

export default Footer