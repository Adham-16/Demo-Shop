import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";


export function Categories() {
  const [categories, setCategories] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories()
  }, []);
  async function getCategories() {
    setIsLoading(true)
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      setCategories(data.data)
    setIsLoading(false)
    
  }
  return (
    <>
    {IsLoading ? <LoadingScreen /> :
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 " >
        {categories?.map((category,index) =>{
            return <div key={index}>
                <div className="w-full h-full bg-[#0000008c] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link to={"/SpecificCategory/"+ category._id} className="flex justify-center">
                        <img className="p-2 rounded-t-lg  max-h-56 w-full" src={category.image} alt="product image" />
                    </Link>
                    <div className="px-5 pb-5">
                        <Link to={"/SpecificCategory/"+ category._id}>
                            <h5 className="md:text-xl text-sm font-semibold text-[#C9CACB] dark:text-white line-clamp-1">{category.name}</h5>
                        </Link>
                    </div>
                </div>
            </div>
        })}
    </div>
    }
    </>
  )
}
