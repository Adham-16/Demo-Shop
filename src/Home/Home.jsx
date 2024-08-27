import { useEffect, useState } from "react"
import axios from "axios";
import { Product } from './../product/product';
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";





export function Home() {
  const [products, setProducts] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getProducts()
  }, []);

  async function getProducts() {

    let {data}= await axios.get("https://ecommerce.routemisr.com/api/v1/products")
    setProducts(data.data)
    setIsLoading(false)
  }
 
  
  return (
    <>
   {IsLoading ? <LoadingScreen /> :
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 " >
    {
      products.map((product,index)=>{
      return <Product product={product} key={index}/>
      })
    }
    </div>
    
    }
    </>
  )
}
