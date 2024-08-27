import { useContext, useState } from 'react'
import logo from '/src/assets/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

export function Navbar() {
    
    let {UserToken,setUserToken} = useContext(AuthContext)
    
    const[isOpen, setIsOpen]= useState(false);
    let navigate = useNavigate()

    function SignOut() {
        setUserToken("")
        localStorage.removeItem("token")
        navigate("/login")
    }

  return (
    <>
<nav className="bg-[#000000bf] border-gray-200 py-2.5 dark:bg-gray-900 fixed z-50 w-full top-0 left-0">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-8 mx-auto">
        <Link to={'/'} className="flex items-center">
        <img src={logo} className="h-6 mr-3 sm:h-9 rounded-full" alt="Demo Shop" />
        <span className="self-center text-xl font-semibold text-[#C9CACB] whitespace-nowrap dark:text-white">Demo Shop</span>
        </Link>


        {!UserToken &&
            <div className='space-x-1'>
            <Link to={'/login'}   className=' bg-[#4E12A0] text-white rounded-md p-2 '>Login</Link>
            <Link to={'/register'}   className=' bg-[#4E12A0] text-white rounded-md p-2 '>Register</Link>
        </div>}


        { UserToken &&
            <div className="flex items-center order-2 md:order-2">
            <button onClick={()=> setIsOpen(!isOpen)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="true">
                <span className="sr-only">Open main menu</span>
                <i className={isOpen ? " fa-bars w-6 h-6 fa-2x hidden": "fa-solid fa-bars w-6 h-6 fa-2x" }></i>
                <i className={isOpen ? "fa-solid fa-xmark w-6 h-6 fa-2x " :" fa-xmark w-6 h-6 fa-2x hidden" }></i>
            </button>
        </div>}

        
        {UserToken && <div className={isOpen ? ` w-full md:flex py-1 md:py-0 md:w-auto order-3 md:order-1`: " w-full md:flex py-1 md:py-0 md:w-auto order-3 md:order-1 hidden" } id="mobile-menu-2">
        <ul className="flex flex-col md:items-center font-medium md:flex-row  lg:mt-0">
            <li>
            <NavLink to={'/'} className="block py-2 pl-3 pr-4 text-[#C9CACB] dark:text-white " aria-current="page">Home</NavLink>
            </li>
            <li>
            <NavLink  to={'/Wishlist'} className="block py-2 pl-3 pr-4 text-[#C9CACB]  dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Wishlist</NavLink>
            </li>
            <li>
            <NavLink  to={'/Brands'} className="block py-2 pl-3 pr-4 text-[#C9CACB]   dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"> Brands</NavLink>
            </li>
            <li>
            <NavLink  to={'/Categories'} className="block py-2 pl-3 pr-4 text-[#C9CACB]   dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Categories</NavLink>
            </li>
            <li>
            <NavLink  to={'/Cart'} className="block py-2 pl-3 pr-4 text-[#C9CACB]   dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Cart</NavLink>
            </li>
        </ul>
        </div>}
        {UserToken &&<button onClick={SignOut} className=' bg-[#4E12A0] text-white rounded-md p-2 order-1 md:order-3 '>Sign out</button>}


    </div>
</nav>
        {/* <div className="hidden mt-2 mr-4 sm:inline-block">
            <span />
        </div> */}

<script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>

    </>
  )
}
