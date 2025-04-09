import axios from "axios"
import { Link } from "react-router-dom";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";
import { NotFound } from "../notfound/notfound";
import { useQuery } from "@tanstack/react-query";


export function Categories() {

  async function getCategories() {
    let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    return data.data;
  }

  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  });


  if (isLoading) return <LoadingScreen />;
  if (error) return <NotFound />;
  return (
    <>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 " >
        {categories?.map((category, index) => {
          return <div key={index}>
            <div className="w-full h-full bg-[#0000008c] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to={"/SpecificCategory/" + category._id} className="flex justify-center">
                <img className="p-2 rounded-t-lg  max-h-56 w-full" loading="lazy" src={category.image} alt="product image" />
              </Link>
              <div className="px-5 pb-5">
                <Link to={"/SpecificCategory/" + category._id}>
                  <h5 className="md:text-xl text-sm font-semibold text-[#C9CACB] dark:text-white line-clamp-1">{category.name}</h5>
                </Link>
              </div>
            </div>
          </div>
        })}
      </div>

    </>
  )
}
