import {Link} from "react-router-dom";
import {useCart} from "../hooks/Cart";


export function Header({onClickCard}){

    const {totalPrice} = useCart()

    return (
        <header className='flex justify-between	p-10'>
            <Link to="/">
                <div className="flex items-center">
                        <img src='react_sneaker/img/logo.png' alt='Logo' className='mr-4'/>
                    <div>
                        <h3 className='mb-0 text-xl font-bold uppercase'>Sneakers shop</h3>
                        <p className='mt-0'>Магазин обуви</p>
                    </div>
                </div>
            </Link>
            <ul className="flex items-center">
                <li className='flex cursor-pointer' onClick={() => onClickCard()} alt='Корзина'>
                    <img src="react_sneaker/tree/gh-pages/img//cart.svg" alt="" className='mr-2.5'/>
                    <span className='mr-8'>{totalPrice} ru.</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img src="react_sneaker/tree/gh-pages/img/img/heart.svg" alt="Закладки" className='mr-8 cursor-pointer'/>
                    </Link>
                </li>
                <li>
                    <Link to='/orders'>
                        <img src="react_sneaker/tree/gh-pages/img/img/user.svg" alt="Пользователь" className='cursor-pointer'/>
                    </Link>
                </li>
            </ul>
        </header>
    )
}