import axios from "axios";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

export function CartProduct({ product, setCart, cart }) {

  const [IsIncreaseLoading, setIsIncreaseLoading] = useState(false);
  const [IsDecreaseLoading, setIsDecreaseLoading] = useState(false);
  const [IsNotAllowed, setIsNotAllowed] = useState(false);
  const [productCount, setProductCount] = useState(product.count);


  async function removeUserCartItem(productId) {

    let { data } = await axios.delete("https://ecommerce.routemisr.com/api/v1/cart/" + productId, {
      headers: {
        token: localStorage.getItem("token")
      }
    })
    setCart(data);
    toast.success(' Your Product Is Deleted From Cart !', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }

  async function updateProductsCart(productId, count) {
    if (count > product.count) {
      setIsIncreaseLoading(true)
      setIsNotAllowed(true)
    } else {
      setIsDecreaseLoading(true)
      setIsNotAllowed(true)
    }
    let { data } = await axios.put('https://ecommerce.routemisr.com/api/v1/cart/' + productId, {
      count
    }, {
      headers: {
        token: localStorage.getItem("token")
      }
    })
    setCart(data);
    setIsIncreaseLoading(false)
    setIsDecreaseLoading(false)
    setIsNotAllowed(false)

  }

  useEffect(() => {
    setProductCount(product.count)
  }, [cart]);





  return (
    <>
      <li className="flex gap-4">
        <img
          src={product.product.imageCover}
          alt=""
          className="size-1/5 rounded object-cover"
          loading="lazy"
        />

        <div>
          <h3 className=" text-[#7edf3d] font-medium text-sm sm:text-2xl">{product.product.title}</h3>
          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline text-[#C9CACB] text-xs sm:text-xl">Brand : </dt>
              <dd className="inline text-[#C9CACB] text-xs sm:text-xl">{product.product.brand.name} </dd>
            </div>
            <div>
              <dt className="inline text-[#C9CACB] text-xs sm:text-xl">Price : </dt>
              <dd className="inline text-[#C9CACB] text-xs sm:text-xl"> ${product.price}</dd>
            </div>
            <div>
              <dt className="inline text-[#C9CACB] text-xs sm:text-xl">Price For All :</dt>
              <dd className="inline text-[#C9CACB] text-xs sm:text-xl"> ${product.price * product.count}</dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-1 items-end justify-evenly gap-2 flex-col">
          <div className="h-full flex items-center justify-evenly  flex-col">
            <form className="flex items-center justify-center ">
              <button disabled={IsIncreaseLoading || IsNotAllowed} onClick={() => updateProductsCart(product.product._id, product.count + 1)} className=" cursor-pointer rounded-full bg-[#beb1d1] text-2xl px-0 disabled:cursor-not-allowed  md:px-2 mr-2">{IsIncreaseLoading ? <i className="fas fa-spinner fa-spin"></i> : '+'}</button>
              <input
                onChange={(e) => setProductCount(e.target.value)}
                onBlur={() => product.count != productCount && updateProductsCart(product.product._id, productCount)}
                type="string"
                min="1"
                value={productCount}
                className="h-8 w-12 rounded md:text-2xl border-gray-200 bg-[#8851d6]  p-0 text-center text-xs text-[#C9CACB] [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button disabled={IsNotAllowed || IsDecreaseLoading || product.count == 1} onClick={() => updateProductsCart(product.product._id, product.count - 1)} className="cursor-pointer disabled:cursor-not-allowed rounded-full bg-[#beb1d1] text-2xl px-1  md:px-2 ml-2" >{IsDecreaseLoading ? <i className="fas fa-spinner fa-spin"></i> : '-'}</button>


            </form>
            <button onClick={() => removeUserCartItem(product.product._id)} className="text-gray-600 transition hover:text-[#8851d6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </li>
    </>
  )
}




