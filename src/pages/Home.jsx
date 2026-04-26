import toys from '../data/toys.json'
import ToyCard from '../components/ToyCard'
import { useAuth } from '../context/AuthContext'

function Home() {
  const { user } = useAuth()

  return (
    <div>

      {/* Temporary auth check - remove later */}
      <div className="bg-base-300 text-center py-2 text-sm">
        {user ? `Logged in as: ${user.email}` : 'Not logged in'}
      </div>

      {/* Hero Section */}
      <div className="bg-base-200 py-20 text-center">
        <h1 className="text-5xl font-bold text-primary mb-4">
          Welcome to ToyTopia 🧸
        </h1>
        <p className="text-lg text-base-content/60 mb-8">
          Discover amazing toys from local sellers near you
        </p>
        <button className="btn btn-primary btn-lg">
          Shop Now
        </button>
      </div>

      {/* Popular Toys Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          🌟 Popular Toys
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toys.map(toy => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home