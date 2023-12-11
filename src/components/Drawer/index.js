import Info from "../info";
import { useState } from "react";
import axios from "axios";
import {useCart} from "../../hooks/Cart";
import styles from "./Drawer.module.scss"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export function Drawer({ onRemove = '', items = [], opened }){
    const { closeCart, cartItem, setCartItem, totalPrice } = useCart()
    const [orderId, setOrderId] = useState(null)
    const [isComplete, setIsComplete] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const completeIsShop = async () => {
        try {
            setIsComplete(true)
            const {data} = await axios.post("https://6521afeba4199548356d7bb1.mockapi.io/orders", {
                items: cartItem
            })
            setOrderId(data.id)
            setIsComplete(true)
            setCartItem([])
            for (let i = 0; i < cartItem.length; i++ ){
                const item = cartItem[i]
                await axios.delete('https://650888ed56db83a34d9c7a5d.mockapi.io/cart/' + item.id)
                await delay(1000)
            }
        } catch (error) {
            alert('Ошибка при создании заказа!')
        }
        setIsLoading(false)
    }

    return (
        <div className={`${styles.overlay} ${opened ? '' : styles.overlayVisible }`}>
            <div className={styles.drawer}>
                <h2 className='text-2xl flex justify-between'>
                    Корзина
                    <img onClick={() => closeCart()} src="img/remove_snake.svg" className='removeBtn' alt="Remove"/>
                </h2>

                {
                    items.length > 0 ?
                        <div>
                            <div className="items">
                                {items.map((item, index) => (
                                    <div key={index} className='cartItem border rounded-lg flex p-4 text items-center'>
                                        <img width={70} height={70} className='mr-5' src={item.image} alt=""/>
                                        <div className='mr-3 text-sm'>
                                            <p>{item.name}</p>
                                            <b>{item.price} руб.</b>
                                        </div>
                                        <img onClick={() => onRemove(item.id)} src="img/remove_snake.svg" className='removeBtn' alt="Remove"/>
                                    </div>
                                ))}
                            </div>
                            <div className='totalBlock'>
                                <ul>
                                    <li>
                                        <span>Итого: </span>
                                        <div></div>
                                        <b>{totalPrice - Math.round(totalPrice * 0.05)} руб. </b>
                                    </li>
                                    <li>
                                        <span>Налог 5%: </span>
                                        <div></div>
                                        <b>{Math.round(totalPrice * 0.05)} руб. </b>
                                    </li>
                                </ul>
                                <button
                                    disabled={isLoading}
                                    onClick={ () => completeIsShop() }
                                    className='greenButton'>Оформить заказ <img src="img/vector.svg" alt="Vector"/></button>
                            </div>
                        </div>
                        :
                        <Info title={isComplete ? `Заказ № - ${orderId} оформлен` : "Корзина пуста" } description={isComplete ? "Вернуться в магазин" : "Добавьте товар в корзину"  } image={isComplete ? "img/issued.png" : "img/cart-null.png" }/>
                }

            </div>
        </div>
    )
}