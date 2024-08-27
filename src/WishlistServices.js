import axios from "axios";
import { Bounce, toast } from "react-toastify";

    export async function addProductToWishlist(productId) {
        let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',{
                productId
        },{
                headers:{
                token :localStorage.getItem("token")
                }
            })
            toast.success('Product added successfully to your wishlist!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
            
    }