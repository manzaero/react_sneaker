export function Drawer(props){
    console.log(props)
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className='text-2xl flex justify-between'>
                    Корзина
                    <img onClick={props.closeCart} src="/img/remove_snake.svg" className='removeBtn' alt="Remove"/>
                </h2>

                <div className="items">
                    <div className='cartItem border rounded-lg flex p-4 text items-center'>
                        <img width={70} height={70} className='mr-5' src="/img/sneak/image1.jpg" alt=""/>
                        <div className='mr-3 text-sm'>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img src="/img/remove_snake.svg" className='removeBtn' alt="Remove"/>
                    </div>
                    <div className='cartItem border rounded-lg flex p-4 text items-center'>
                        <img width={70} height={70} className='mr-5' src="/img/sneak/image1.jpg" alt=""/>
                        <div className='mr-3 text-sm'>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img src="/img/remove_snake.svg" className='removeBtn' alt="Remove"/>
                    </div>
                    <div className='cartItem border rounded-lg flex p-4 text items-center'>
                        <img width={70} height={70} className='mr-5' src="/img/sneak/image1.jpg" alt=""/>
                        <div className='mr-3 text-sm'>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img src="/img/remove_snake.svg" className='removeBtn' alt="Remove"/>
                    </div>
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