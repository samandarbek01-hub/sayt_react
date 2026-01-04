import { useDispatch } from "react-redux"
import { addToCart } from "../features/productsSlice"

function ProductCard({ product }) {
  const { image, title, description, price } = product
  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <li className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden 
      transition transform hover:-translate-y-2 hover:shadow-lg">
      <div className="bg-gray-100 h-[220px] flex items-center justify-center overflow-hidden">
        <img className="h-full object-contain transition-transform duration-300 hover:scale-110 py-9"
          src={image}
          alt={title}
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h2 className="text-lg font-semibold line-clamp-1">
          {title}
        </h2>

        <p className="text-gray-600 text-sm line-clamp-4">
          {description}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-gray-900">
            $ {price}
          </span>

          <button
            onClick={addCart}
            className="px-4 py-2 bg-black text-white rounded-lg text-sm
              transition hover:bg-gray-800 active:scale-95">
            Add to cart
          </button>
        </div>
      </div>
    </li>
  )
}

export default ProductCard
