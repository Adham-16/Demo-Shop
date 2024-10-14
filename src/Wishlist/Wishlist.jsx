import axios from "axios";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RatingStar } from "../RatingStar/RatingStar";
import { addProductToCart } from "../cartService";



export function Wishlist() {
  const [IsLoading, setIsLoading] = useState(true);
  const [wishlist, setWishlist] = useState(null);
  const [numProduct, setNumProduct] = useState();

async function getUserWishlist() {
  setIsLoading(true)
  let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',{
    headers:{
      token: localStorage.getItem("token")
    }
  })
  setWishlist(data.data)
  setIsLoading(false)
}

async function deleteProductFromWishlist(wishlistId) {
  let {data} = await axios.delete('https://ecommerce.routemisr.com/api/v1/wishlist/'+ wishlistId ,{
    headers:{
      token: localStorage.getItem("token")
    }})
    setNumProduct(data)
    
}


    useEffect(() => {
      getUserWishlist()
    }, [numProduct]);

  return (
    <>
   {IsLoading ? <LoadingScreen /> :
    <div className="flex justify-center items-center flex-col " >
            <div className="my-14">
              <header className="text-center">
                <h1 className="text-xl font-bold text-[#ccc] sm:text-3xl">Your Wishlist</h1>
              </header>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 " >

    {
      wishlist?.map((wishlist,index)=>{
      return <div key={index}>
                <div className="w-full max-w-sm bg-[#0000008c] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to={"/ProductDetails/" + wishlist._id } className="flex justify-center">
                        <img className="p-2 rounded-t-lg w-3/4 hover:scale-" src={wishlist.imageCover} alt="product image" />
                    </Link>
                    <div className="px-5 pb-5">
                        <div className="flex justify-between flex-row">
                        <div>
                        <Link to={"/ProductDetails"}>
                            <h5 className="text-sm font-semibold text-[#C9CACB] dark:text-white line-clamp-1">{wishlist.title}</h5>
                        </Link>
                        <div className="flex items-center my-2">
                            <RatingStar rating={wishlist.ratingsAverage }/>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{wishlist.ratingsAverage}</span>
                        </div>
                        </div>
                            <div className="h-fit">
                            <i onClick={()=> deleteProductFromWishlist(wishlist._id)} className="fa-solid fa-trash text-violet-500 text-3xl duration-500 hover:text-amber-500 "></i>
                        </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-[#C9CACB] dark:text-white">${wishlist.price}</span>
                            <a onClick={()=> addProductToCart(wishlist._id)} className="text-white bg-[#4E12A0] hover:bg-[#8851d6] duration-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
      })
    }
      </div>
    </div>
    
    }
    </>
  )
}
