import { Link} from 'react-router-dom'
import logo from '/src/assets/logo.png'



export  function Footer() {
  return (
    <>
   <footer className="bg-transparent dark:bg-gray-900">
  <div className="container px-6 py-4 mx-auto">
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
      <div className="col-span-2">
        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-[#C9CACB] xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>
        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
          <input id="Email" type="text" className="px-4 py-2 text-gray-700 bg-transparent border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            Subscribe
          </button>
        </div>
      </div>
      <div>
        <p className="font-semibold text-[#C9CACB] dark:text-white">Quick Link</p>
        <div className="flex flex-col items-start mt-5 space-y-2">
          <Link to={"/"} className="text-[#C9CACB] transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:text-[#e91e63]">Home</Link>
          <Link to={"/Products"} className="text-[#C9CACB] transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:text-[#e91e63]">Products</Link>
          <Link to={"/Brands"} className="text-[#C9CACB] transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:text-[#e91e63]">Brands</Link>
        </div>
      </div>
      <div>
        <p className="font-semibold text-[#C9CACB] dark:text-white">Industries</p>
        <div className="flex flex-col items-start mt-5 space-y-2">
          <Link to={"/Categories"} className="text-[#C9CACB] transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:text-[#e91e63]">Categories</Link>
          <Link to={"/Cart"} className="text-[#C9CACB] transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400  hover:text-[#e91e63]">Cart</Link>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-200 md:my-2 dark:border-gray-700" />
    <div className="flex items-center justify-between">
      <a href="#">
        <img className="w-auto h-7 rounded-full" src={logo} alt="Demo Shop" />
      </a>
      <div className="flex -mx-2">
        <a href="#" className="mx-2 text-[#C9CACB] transition-colors duration-300 dark:text-gray-300 hover:text-[#e91e63] dark:hover:text-[#e91e63]" aria-label="Reddit">
          <i className="fa-brands fa-facebook w-5 h-5 fill-current"></i>
        </a>
        <a href="#" className="mx-2 text-[#C9CACB] transition-colors duration-300 dark:text-gray-300 hover:text-[#e91e63] dark:hover:text-[#e91e63]" aria-label="Facebook">
          <i className="fa-brands fa-twitter w-5 h-5 fill-current"></i>
        </a>
        <a href="#" className="mx-2 text-[#C9CACB] transition-colors duration-300 dark:text-gray-300 hover:text-[#e91e63] dark:hover:text-[#e91e63]" aria-label="Github">
          <i className="fa-brands fa-instagram w-5 h-5 fill-current"></i>
        </a>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}
