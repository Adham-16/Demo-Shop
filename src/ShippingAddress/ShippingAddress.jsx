
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup"


export  function ShippingAddress() {
    const { cartId } = useParams()
    
    const [isRegister,setIsRegister]=useState(false);
    const [isError,setIsError]=useState("");

    const initialValues={
        "city": "Cairo",
        "phone": "01010700999",
        "details": "Assuit Al-Fath Street ",
        }

    const validationSchema = Yup.object({
        city : Yup.string().required("City is Required"),
        phone : Yup.string().required("Phone is Required"),
        details : Yup.string().required("Details is Required")
      })

    

    const onSubmit = async function login() {
        setIsRegister(true)
        setIsError("")
        
        await axios.post('https://ecommerce.routemisr.com/api/v1/orders/checkout-session/' + cartId,{ shippingAddress: values},{
            headers:{
                token:localStorage.getItem("token")
            }, params :{
                url:'http://localhost:5173'
            }
        }).then(({data})=>{
        setIsRegister(false)
        location.href = data.session.url
        
        }
        ).catch(({err}) => {
        setIsRegister(false)    
        } 
        )

    }

    let {handleSubmit , handleChange ,handleBlur,touched, errors, values} = useFormik({
    initialValues,
    onSubmit,
    validationSchema 
    })
    

return (
    <>
    <div className="md:py-12 py-24 flex items-center justify-center"   >
        <div  className="w-full  lg:w-1/3 md:w-1/2 sm:w-2/3  mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-6 flex flex-col items-center">
            <h1  className="text-xl font-bold text-center text-[#25163f] dark:text-gray-200 mb-3 mt-3 ">Shipping Address</h1>
            <form onSubmit={handleSubmit}  className="w-full flex flex-col gap-2">
                <div  className="flex items-start flex-col justify-start">

                    <label htmlFor="city"  className="text-sm text-gray-700 dark:text-gray-200 mr-2">City: </label>
                    <input onBlur={handleBlur} onChange={handleChange} value={values.city} type="text" id="city" name="city"  className="w-full px-2 dark:text-gray-200 dark:bg-gray-900 py-1 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                    { touched.city && errors.city    &&  <p  className=" text-[#e91e63]">{errors.city}</p>}        
                
                </div>
                <div  className="flex items-start flex-col justify-start">

                    <label htmlFor="phone"  className="text-sm text-gray-700 dark:text-gray-200 mr-2">Phone: </label>
                    <input onBlur={handleBlur} onChange={handleChange} value={values.phone} type="tel" id="phone" name="phone"  className="w-full px-2 dark:text-gray-200 dark:bg-gray-900 py-1 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                    { touched.phone && errors.phone    &&  <p  className=" text-[#e91e63]">{errors.phone}</p>}        
                
                </div>
                <div  className="flex items-start flex-col justify-start">

                    <label htmlFor="details"  className="text-sm text-gray-700 dark:text-gray-200 mr-2">Details:</label>
                    <input onBlur={handleBlur} onChange={handleChange} value={values.details} type="text" id="details" name="details"  className="w-full px-2 dark:text-gray-200 dark:bg-gray-900 py-1 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                    { touched.details &&  errors.details  &&  <p  className=" text-[#e91e63]">{errors.details}</p>}           
                
                </div>
                <button type="submit" className="bg-[#e91e63] hover:bg-[#25163f] text-white font-medium py-2 px-4 mt-2 mb-3 rounded-md shadow-sm disabled:bg-[#25163f]" disabled={isRegister}>Checkout {isRegister && <i className="fa-solid fa-check fa-beat ml-1"></i>}</button>
                {isError && <p className=" text-[#e91e63] text-lg text-center">{isError}</p>}
            </form>
            
        </div>
    </div>
    </>
  )
}

