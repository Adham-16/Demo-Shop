import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Register } from './Register/Register'
import { Login } from './Login/Login'
import { NotFound } from './notfound/notfound';
import {Layout} from './Layout/Layout';
import { Home } from './Home/Home';
import { Cart } from './cart/Cart';
import { Wishlist } from './Wishlist/Wishlist';
import { Categories } from './Categories/Categories';
import { Brands } from './Brands/Brands';
import AuthContextProvider from './Context/AuthContext';
import { ProtectedRoutes } from './ProtectedRoutes/ProtectedRoutes';
import { ProtectedAuth } from './ProtectedAuth/ProtectedAuth';
import { ProductDetails } from './ProductDetails/ProductDetails';
import { ToastContainer } from 'react-toastify';
import { ShippingAddress } from './ShippingAddress/ShippingAddress';
import AllOrders from './AllOrders/AllOrders';
import { SpecificCategory } from './SpecificCategory/SpecificCategory';



function App() {
  let Router = createBrowserRouter([
    {path : '', element: <Layout/> , children:[
      {index: true , element: <ProtectedRoutes> <Home/> </ProtectedRoutes>},
      {path:'login' , element: <ProtectedAuth> <Login/></ProtectedAuth> },
      {path:'Register' , element: <ProtectedAuth> <Register/></ProtectedAuth>},
      {path:'Cart' , element: <ProtectedRoutes> <Cart/> </ProtectedRoutes> },
      {path:'Wishlist' , element:  <ProtectedRoutes> <Wishlist/> </ProtectedRoutes>},
      {path:'Categories' , element:  <ProtectedRoutes> <Categories/> </ProtectedRoutes>},
      {path:'Brands' , element:  <ProtectedRoutes> <Brands/> </ProtectedRoutes>},
      {path:'ShippingAddress/:cartId' , element:  <ProtectedRoutes> <ShippingAddress/> </ProtectedRoutes>},
      {path:'allorders' , element:  <ProtectedRoutes> <AllOrders/> </ProtectedRoutes>},
      {path:'ProductDetails/:id' , element:  <ProtectedRoutes> <ProductDetails/> </ProtectedRoutes>},
      {path:'SpecificCategory/:id' , element:  <ProtectedRoutes> <SpecificCategory/> </ProtectedRoutes>},
      { path: '*', element:<NotFound/>}
    ]}
      
    ])
  return (
  
    <>
    <AuthContextProvider>
      <RouterProvider router={Router} />
      <ToastContainer />
    </AuthContextProvider>
    </>
  )
}

export default App
