import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";



function Navbar() {
  const cartProducts = useSelector((state) => state.products)
  return (
    <header className="navbar bg-base-100 shadow-md">
    <div className="container flex items-center">
        <Link to={"/"} className="btn btn-ghost text-xl mr-auto">PRODUCTS</Link>
        <button className="relative">
          {!!cartProducts.length && (<span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-primary 
          rounded-xl w-6">{cartProducts.length}</span>)}
            <FaShoppingCart  size={24} />
        </button>
    </div>
</header>
  )
}

export default Navbar