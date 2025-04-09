import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { addProductToCart } from "../cartService";

export function RelatedProducts({ Products }) {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  };



  return (
    <>
      <main className="my-8">
        <div className="container mx-auto px-6">
          <div className="mt-16 p-3 bg-[#0000008c]">
            <h3 className="text-[#C9CACB] text-2xl font-medium">More Products</h3>
            <hr className="my-2  border-gray-200 dark:border-gray-800" />
            <Slider {...settings}>
              {Products.map((product, index) => {
                return <div key={index} className="w-full px-1 flex justify-center max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <img className=" w-full bg-cover rounded-md" loading="lazy" src={product?.imageCover} />
                  <div className="px-2 py-3 flex justify-between items-center flex-col">
                    <div >
                      <Link to={"/ProductDetails/" + product._id} className="text-[#C9CACB] text-xl uppercase line-clamp-1">{product?.title}</Link>
                      <span className="text-gray-500 text-xl mt-2">${product?.price}</span>
                    </div>
                    <a onClick={() => addProductToCart(product._id)} className="text-white bg-[#4E12A0] hover:bg-[#8851d6] flex items-center font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg className="w-5 h-5 mr-1 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                      </svg>  Add
                    </a>
                  </div>
                </div>

              })}
            </Slider>
          </div>
        </div>
      </main>
    </>
  )
}
