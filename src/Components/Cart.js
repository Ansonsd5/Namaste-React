
import { useDispatch, useSelector } from "react-redux";
import ListItems from "./ListItems";
import { clearCart } from "../utils/cartSlice";


const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();


    const clearCartHandler = () =>{
        console.log("clear cart");
        dispatch(clearCart())
    }

   console.log(cartItems);
    return <div className="w-6/12 flex  flex-col m-auto">
       
        <h1 className="  text-xl font-bold text-center">Cart</h1>
        <button className="w-2/12 bg-primary rounded text-white text-center m-auto p-2 my-2" onClick={clearCartHandler}>Clear cart</button>
        
        
        <div>
           <ListItems items={cartItems}/>
        </div>
    </div>
}
export default Cart;