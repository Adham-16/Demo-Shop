import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";


export function Layout() {
  return (
    <>
    <Navbar/>
    <div className="px-10 pt-28 pb-[70px] container mx-auto">
    <Outlet/>
    </div>
    <ScrollRestoration/>
    <Footer/>

    </>
  )
}
