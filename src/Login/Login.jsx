import axios from "axios";
import { useFormik } from "formik";
import {  useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup"
import { AuthContext } from "../Context/AuthContext";




export  function Login() {

    const initialValues={
        "email":"",
        "password":"asd1234@"
        }

    const validationSchema = Yup.object({
        email : Yup.string().required("Email is Required").matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Please Enter A Valid Email"),
        password : Yup.string().required("Password is Required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Minimum eight characters, at least one letter, one number and one special character")
      })

    
    const [isRegister,setIsRegister]=useState(false);
    const [isError,setIsError]=useState("");
    const navigate = useNavigate()
    let {setUserToken}=useContext(AuthContext)

    const onSubmit = async function login() {
        setIsRegister(true)
        setIsError("")
        await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values).then(({data})=>{
            setIsRegister(false)
            setUserToken(data.token)
            localStorage.setItem("token",data.token)
            if (location.pathname == "/login") {
                navigate("/")
            }else{
                navigate(location.pathname)
            }
        }
        ).catch(({response})=>{
        setIsRegister(false)
        setIsError(response.data.message)    
        } 
        )}

    let {handleSubmit , handleChange ,handleBlur,touched, errors, values} = useFormik({
    initialValues,
    onSubmit,
    validationSchema 
    })
    

return (
    <>
    <div className="md:py-12 py-24 flex items-center justify-center"   >
        <div  className="w-full  lg:w-1/3 md:w-1/2 sm:w-2/3  mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-6 flex flex-col items-center">
            <h1  className="text-xl font-bold text-center text-[#25163f] dark:text-gray-200 mb-3 mt-3 ">Welcome to My Shop</h1>
            <form onSubmit={handleSubmit}  className="w-full flex flex-col gap-2">
                <div  className="flex items-start flex-col justify-start">
                    <label htmlFor="email"  className="text-sm text-gray-700 dark:text-gray-200 mr-2">Email:</label>
                    <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" id="email" name="email"  className="w-full px-2 dark:text-gray-200 dark:bg-gray-900 py-1 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                    { touched.email && errors.email    &&  <p  className=" text-[#e91e63]">{errors.email}</p>}        
                </div>
                <div  className="flex items-start flex-col justify-start">
                    <label htmlFor="password"  className="text-sm text-gray-700 dark:text-gray-200 mr-2">Password:</label>
                    <input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" id="password" name="password"  className="w-full px-2 dark:text-gray-200 dark:bg-gray-900 py-1 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                    { touched.password &&  errors.password  &&  <p  className=" text-[#e91e63]">{errors.password}</p>}           
                </div>
                <button type="submit" className="bg-[#e91e63] hover:bg-[#25163f] text-white font-medium py-2 px-4 mt-2 rounded-md shadow-sm disabled:bg-[#25163f]" disabled={isRegister}>Register {isRegister && <i className="fa-solid fa-check fa-beat ml-1"></i>}</button>
                {isError && <p className=" text-[#e91e63] text-lg text-center">{isError}</p>}
            </form>
            <div  className="mt-4 text-center">
            <span  className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
            <NavLink to={'/Register'}  className="text-[#25163f] hover:text-stone-900">Register</NavLink>
            </div>
            
        </div>
    </div>
    </>
  )
}
