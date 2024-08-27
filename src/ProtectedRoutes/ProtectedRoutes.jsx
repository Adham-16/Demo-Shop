import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Login } from "../Login/Login"


export function ProtectedRoutes({children}) {
    const{UserToken} =useContext(AuthContext)
    
  return (
    <>
    {
        UserToken ? children : <Login/>
    }
    </>
  )
}
