import axios from "axios"
import { useEffect, useState } from "react";
import { CartProduct } from "../CartProduct/CartProduct";
import { Link } from "react-router-dom";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";


export  function Cart() {
  const [cart, setCart] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);

useEffect(() => {
    getUserCart()
}, []);

async function getUserCart() {
  setIsLoading(true)
  let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
    headers:{
      token: localStorage.getItem("token")
  }}).finally(()=>{
    setIsLoading(false)
  })
  setCart(data);
  
}

function ClearCart() {
    axios.delete("https://ecommerce.routemisr.com/api/v1/cart",{
    headers:{
      token: localStorage.getItem("token")
  }}).finally(()=>{
    setCart({...cart,data:{...cart.data,products:[]}});
    
  })
}

if (IsLoading) {
  return <LoadingScreen/>
}
  return (
    <>

     {cart.data.products.length ?
        <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-[#ccc] sm:text-3xl">Your Cart</h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
              {cart?.data.products.map((product,index)=>{
            return<CartProduct key={index} product={product} setCart={setCart} cart={cart}/>
                })}
              </ul>

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <dt className="text-xl text-[#C9CACB]">Subtotal</dt>
                      <dd className="text-xl text-[#C9CACB]">${cart?.data.totalCartPrice}</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt className="text-xl text-[#C9CACB]">VAT</dt>
                      <dd className="text-xl text-[#C9CACB]">0</dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt className="text-xl text-[#C9CACB]">Total</dt>
                      <dd className="text-xl text-[#C9CACB]">${cart?.data.totalCartPrice}</dd>
                    </div>
                  </dl>
                  <div className="flex justify-end">
                    <Link
                      to={"/ShippingAddress/" + cart?.data._id}
                      className="block rounded bg-gray-700 px-5 py-3 text-sm xl:text-xl text-gray-100 transition hover:bg-gray-600"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => ClearCart()} className=" text-slate-200 text-xl border-2 border-gray-400 px-4 rounded-md py-2 hover:text-white hover:bg-gray-500 mx-auto block">Empty Cart </button>
          </div>
        </div>
        </section> :
      <h1 className="text-6xl text-[#ccc] my-20 text-center">Your Cart Is Empty</h1> }
    </>
    
  )
}
