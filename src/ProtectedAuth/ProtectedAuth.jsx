import {  useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom"


export function ProtectedAuth({children}) {
    const{UserToken} =useContext(AuthContext)
  return (
    <>
        {
            !UserToken ? children :<Navigate to={"/"}/>
        }
    </>
  )
}
