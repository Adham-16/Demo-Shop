import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup"


export  function Register() {


    const initialValues={
        "name": "",
        "email":"",
        "password":"",
        "rePassword":"",
        "phone":""
        }

    const validationSchema = Yup.object({
        name : Yup.string().required("Name is Required").min(2,"Name Mast be More Than 2").max(20,"Name Mast be Less Than 20"),
        email : Yup.string().required("Email is Required").matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Please Enter A Valid Email"),
        password : Yup.string().required("Password is Required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Minimum eight characters, at least one letter, one number and one special character"),
        rePassword: Yup.string().required("RePassword is Required").oneOf([Yup.ref("password")],"Password Mast be Match with RePassword"),
        phone : Yup.string().required("Phone is Required").min(10,"Enter 11 digit").max(10,"Enter 11 digit")
        })

    const [isRegister,setIsRegister]=useState(false);
    const [isError,setIsError]=useState("");
    const [isSuccess,setIsSuccess]=useState("");
    const navigate = useNavigate()

    const onSubmit = async function Register() {
        setIsError("")
        setIsSuccess("")
        setIsRegister(true)
        await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values).then(({data})=>{
        setTimeout(() => {
            navigate("/login")
        }, 500);
        setIsRegister(false),
        setIsSuccess(data.message)
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
    <div className="min-h-screen flex items-center justify-center"   >
        <div  className="w-full  lg:w-1/3 md:w-1/2 sm:w-2/3 md:mt-5 mt-24 mb-5  mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-6 flex flex-col items-center">
            <h1  className="text-xl font-bold text-center text-[#25163f] dark:text-gray-200 mb-3 mt-3 ">Welcome to My Shop</h1>
            <form onSubmit={handleSubmit}  className="w-full flex flex-col gap-2">
            
            <div  className="flex items-start flex-col justify-start">
                <label htmlFor="name"  className="text-sm text-gray-700 dark:text-gray-200 mr-2">Name:</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.name} type="text" id="name" name="name"  className="w-full px-2 dark:text-gray-200 dark:bg-gray-900 py-1 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                { touched.name &&   errors.name &&  <p className=" text-[#e91e63]">{errors.name}</p>}
            </div>
            <div  className="flex items-start flex-col justify-start">
                <label htmlFor="email"  className="text-sm text-gray-700 dark:text-gray-200 mr-2">Email:</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" id="email" name="email"  className="w-full px-2 dark:text-gray-200 dark:bg-gray-900 py-1 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                { touched.email && errors.email    &&  <p  className=" text-[#e91e63]">{errors.email}</p>
    }        </div>
            <div  className="flex items-start flex-col justify-start">
                <label htmlFor="password"  className="text-sm text-gray-700 dark:text-gray-200 mr-2">Password:</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" id="password" name="password"  className="w-full px-2 dark:text-gray-200 dark:bg-gray-900 py-1 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                { touched.password &&  errors.password  &&  <p  className=" text-[#e91e63]">{errors.password}</p>
 }           </div>
            <div  className="flex items-start flex-col justify-start">
                <label htmlFor="rePassword"  className="text-sm text-gray-700 dark:text-gray-200 mr-2">Confirm Password:</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.rePassword} type="password" id="rePassword" name="rePassword"  className="w-full px-2 dark:text-gray-200 dark:bg-gray-900 py-1 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                { touched.rePassword && errors.rePassword   &&  <p  className=" text-[#e91e63]">{errors.rePassword}</p>}
            </div>
            <div  className="flex items-start flex-col justify-start">
                <label htmlFor="phone"  className="text-sm text-gray-700 dark:text-gray-200 mr-2">Phone Number:</label>
                <input onBlur={handleBlur} onChange={handleChange} value={values.phone} type="number" id="phone" name="phone"  className="w-full px-2 dark:text-gray-200 dark:bg-gray-900 py-1 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                { touched.phone &&   errors.phone &&  <p  className=" text-[#e91e63]">{errors.phone}</p>
    }        </div>
            <button type="submit"  className="bg-[#e91e63] hover:bg-[#25163f] text-white font-medium py-2 px-4 mt-2 rounded-md shadow-sm disabled:bg-[#25163f]" disabled={isRegister}>Register {isRegister && <i className="fa-solid fa-check fa-beat ml-1"></i>}</button>
            {isSuccess && <p className=" text-[#399352] text-lg text-center">{isSuccess}</p>}
            {isError && <p className=" text-[#e91e63] text-lg text-center">{isError}</p>}
            </form>
            <div  className="mt-4 text-center">
            <span  className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
            <Link to={'/Login'}  className="text-[#25163f] hover:text-stone-900">Login</Link>
            </div>
        </div>
    </div>
    </>
  )
}
