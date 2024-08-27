
import axios from "axios"
import { useEffect, useState } from "react";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";


export function Brands() {
  const [Brands, setBrands] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBrands()
  }, []);
  async function getBrands() {
    setIsLoading(true)
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
      setBrands(data.data)
      console.log(data);
      
    setIsLoading(false)
    
  }
  return (
    <>
    {IsLoading ? <LoadingScreen /> :
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 " >
        {Brands?.map((Brand,index) =>{
            return <div key={index}>
                <div className="w-full h-full bg-[#0000008c] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-center">
                        <img className="p-2 rounded-t-lg  max-h-56 w-full" src={Brand.image} alt="product image" />
                    </div>
                    <div className="px-5 pb-5">
                        <div>
                            <h5 className="md:text-xl text-sm font-semibold text-[#C9CACB] dark:text-white line-clamp-1">{Brand.name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        })}
    </div>
    }
    </>
  )
}
