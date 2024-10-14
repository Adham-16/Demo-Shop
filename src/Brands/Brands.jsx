import axios from "axios"
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";
import { useQuery } from "@tanstack/react-query";
import { NotFound } from "../notfound/notfound";


export function Brands() {
  
  async function getBrands() {
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
    return data.data;
  }

    const { data: brands, isLoading, error } = useQuery({
    queryKey: ['brands'],
    queryFn: getBrands
  });

    if (isLoading) return <LoadingScreen />;
  if (error) return <NotFound/>;

  return (
    <>
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 " >
        {brands?.map((Brand,index) =>{
            return <div key={index}>
                <div className="w-full h-full bg-[#0000008c] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-center">
                        <img className="p-2 rounded-t-lg  max-h-56 w-full" src={Brand.image} alt={Brand.name + " Logo"} />
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
    </>
  )
}
