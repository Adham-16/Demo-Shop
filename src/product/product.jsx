import { Link } from "react-router-dom";
import { RatingStar } from "../RatingStar/RatingStar";
import { addProductToCart } from "../cartService";
import { addProductToWishlist } from "../WishlistServices";

export function Product({product}) {
    


  return (
    <>
            <div >
                <div className="w-full max-w-sm bg-[#0000008c] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to={"/ProductDetails/" + product._id } className="flex justify-center">
                        <img className="p-2 rounded-t-lg w-3/4 hover:scale-" src={product.imageCover} alt="product image" />
                    </Link>
                    <div className="px-5 pb-5">
                        <div className="flex justify-between flex-row">
                        <div>
                        <Link to={"/ProductDetails"}>
                            <h5 className="text-sm font-semibold text-[#C9CACB] dark:text-white line-clamp-1">{product.title}</h5>
                        </Link>
                        <div className="flex items-center my-2">
                            <RatingStar rating={product.ratingsAverage }/>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.ratingsAverage}</span>
                        </div>
                        </div>
                        <div className="h-fit">
                            <i onClick={()=>addProductToWishlist(product._id)} className="fa-solid fa-heart text-violet-500 text-3xl duration-500 hover:text-red-500 "></i>
                        </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-[#C9CACB] dark:text-white">${product.price}</span>
                            <button onClick={()=>addProductToCart(product._id)} className="text-white bg-[#4E12A0] hover:bg-[#8851d6] duration-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
