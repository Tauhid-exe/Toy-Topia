import toys from '../data/toys.json'

function Home() {
  return (
    <div>

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

      {/* Quick data check */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          🌟 Popular Toys
        </h2>
        <p className="text-center text-base-content/50">
          We have {toys.length} toys loaded ✅
        </p>
      </div>

    </div>
  )
}

export default Home