import axios from "axios";
import { Product } from './../product/product';
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";
import { useQuery } from "@tanstack/react-query";
import { NotFound } from "../notfound/notfound";

export function Home() {


  async function getProducts() {
    let {data}= await axios.get("https://ecommerce.routemisr.com/api/v1/products")
    return data.data;
    
  }

  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });

  
  if (isLoading) return <LoadingScreen />;
  if (error) return <NotFound/>;
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 " >
    {products?.map((product,index)=>{
      return <Product product={product} key={index}/>
      })
    }
    </div>
    
    </>
  )
}
