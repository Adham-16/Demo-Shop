import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import  axios  from 'axios';
import { RatingStar } from "../RatingStar/RatingStar";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";
import { ImageSlider } from "../ImageSlider/ImageSlider";
import { RelatedProducts } from "../RelatedProduct/RelatedProduct";
import { addProductToCart } from "../cartService";



export function ProductDetails() {
    let {id} =useParams()
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState(null);

    

    async function getProduct() {
        setIsLoading(true)               
        let {data}= await axios.get("https://ecommerce.routemisr.com/api/v1/products/" + id)
        RelatedProduct(data.data.category._id) 
        setProduct(data.data)
        setIsLoading(false)              
    }

    async function RelatedProduct(CategoryId) {
      let {data}= await axios.get("https://ecommerce.routemisr.com/api/v1/products/" ,{
        params:{
          category: CategoryId
        }
      })
      setRelatedProduct(data.data);
      

    }

    useEffect(() => {
        getProduct()
    }, [id]);
    
  return (
    <>
    {
      IsLoading ?  <LoadingScreen/> :
      <>
      <section className="py-8 bg-[#0000008c] md:py-10 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 lg:max-w-sm mx-auto">
            <ImageSlider images={product?.images}/>
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-[#C9CACB] sm:text-2xl dark:text-white">{product?.title}</h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-[#C9CACB] sm:text-3xl dark:text-white">
                ${product?.price}
              </p>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <RatingStar rating = {product?.ratingsAverage ?? 0}/>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  ({product?.ratingsAverage})
                </p>
              </div>
            </div>
            <div>
                <div className="flex items-center font-medium text-[#C9CACB] mt-4 mb-2">
                    <h1 className="mr-2" >Category :  </h1>
                    <p> { product?.category.name} </p>
                </div>
                <div className="flex items-center font-medium text-[#C9CACB]">
                    <h1 className="mr-2" >Brand :</h1>
                    <p>{product?.brand.name}</p>
                </div>
            </div>
            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <a onClick={() => addProductToWishlist(product._id)} href="#" title className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-[#434445] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700   dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" role="button">
                <svg className="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                </svg>
                Add to favorites
              </a>
              <a onClick={()=>addProductToCart(product._id)} title className="text-white mt-4 sm:mt-0 bg-[#4E12A0] hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center" role="button">
                <svg className="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                </svg>
                Add to cart
              </a>
            </div>
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <p className="mb-6 text-[#C9CACB] dark:text-gray-400">
                {product?.description}
            </p>
          </div>
        </div>
      </div>
      </section> 
      <RelatedProducts Products={relatedProduct}/>
</>
    }
    </>
  )
}















