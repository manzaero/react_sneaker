import AppContext from "../context";
import {useContext} from "react";

export const  useCart = () =>{
    const {cartItem, setCartItem, closeCart, isLoading, onAddToCart} = useContext(AppContext)
    const totalPrice = cartItem.reduce((sum, n) => sum + parseInt(n.price), 0)

    return {cartItem, setCartItem, totalPrice, closeCart, isLoading, onAddToCart }
}