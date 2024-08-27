import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";


export function SpecificCategory() {
    let {id} =useParams()
  const [IsLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");


    
    useEffect(() => {
        getSpecificCategory()
    }, [id]);

    async function getSpecificCategory() {
        setIsLoading(true)
        let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/categories/' + id)
        setCategory(data.data)
        setIsLoading(false)
        console.log(data.data);
        
    }

  return (
    <>
    {IsLoading ? <LoadingScreen /> :
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 " >
            <div >
                <div className="w-full h-full bg-[#0000008c] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-center">
                        <img className="p-2 rounded-t-lg  max-h-56 w-full" src={category.image} alt="product image" />
                    </div>
                    <div className="px-5 pb-5">
                        <div>
                            <h5 className="md:text-xl text-sm font-semibold text-[#C9CACB] dark:text-white line-clamp-1">{category.name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
    }
    </>
  )
}
