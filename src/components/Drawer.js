export function Drawer({ closeCart, onRemove, items = [] }){
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className='text-2xl flex justify-between'>
                    Корзина
                    <img onClick={closeCart} src="/img/remove_snake.svg" className='removeBtn' alt="Remove"/>
                </h2>

                <div className="cartEmpty flex items-center justify-center flex-col">
                    <img src="/img/cart-null.png" alt="" className="mb-2"/>
                    <h2>Корзина пуста!</h2>
                    <button className='greenButton'><img src="/img/vector-back.svg" alt="VectorBack"/>Вернуться назад</button>
                </div>

                <div className="items">
                    {items.map(item => (
                        <div className='cartItem border rounded-lg flex p-4 text items-center'>
                            <img width={70} height={70} className='mr-5' src={item.image} alt=""/>
                            <div className='mr-3 text-sm'>
                                <p>{item.title}</p>
                                <b>{item.price} руб.</b>
                            </div>
                            <img onClick={() => onRemove(item.id)} src="/img/remove_snake.svg" className='removeBtn' alt="Remove"/>
                        </div>
                    ))}
                </div>
                <div className='totalBlock'>
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className='greenButton'>Оформить заказ <img src="/img/vector.svg" alt="Vector"/></button>
                </div>

            </div>
        </div>
    )
}