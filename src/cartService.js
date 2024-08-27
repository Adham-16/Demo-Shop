import axios from "axios";
import { Bounce, toast } from "react-toastify";

    export async function addProductToCart(productId,UserToken){
        let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/cart", {
            productId : productId
        },{
            headers:{
            token :localStorage.getItem("token")
            }
        })
        
        
        toast.success(' Your Product Is Added To Cart !', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }