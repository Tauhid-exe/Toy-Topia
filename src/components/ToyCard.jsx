function ToyCard({ toy }) {
  const { toyName, pictureURL, rating, availableQuantity, price, subCategory } = toy

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      {/* Image */}
      <figure className="h-48 overflow-hidden">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-5">
        <span className="badge badge-primary badge-outline text-xs w-fit">
          {subCategory}
        </span>
        <h2 className="card-title text-lg font-bold">{toyName}</h2>

        <div className="flex justify-between items-center text-sm text-base-content/60">
          <span>⭐ {rating}</span>
          <span>📦 Qty: {availableQuantity}</span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <span className="text-primary font-bold text-xl">${price}</span>
          <button className="btn btn-primary btn-sm">View More</button>
        </div>
      </div>

    </div>
  )
}

export default ToyCard