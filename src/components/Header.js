import {Link} from "react-router-dom";


export function Header({onClickCard}){
    return (
        <header className='flex justify-between	p-10'>
            <Link to="/">
                <div className="flex items-center">
                        <img src='/img/logo.png' alt='Logo' className='mr-4'/>
                    <div>
                        <h3 className='mb-0 text-xl font-bold uppercase'>Sneakers shop</h3>
                        <p className='mt-0'>Магазин обуви</p>
                    </div>
                </div>
            </Link>
            <ul className="flex items-center">
                <li className='flex cursor-pointer' onClick={() => onClickCard()} alt='Корзина'>
                    <img src="/img/cart.svg" alt="" className='mr-2.5'/>
                    <span className='mr-8'>1205 ru.</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img src="/img/heart.svg" alt="Закладки" className='mr-8 cursor-pointer'/>
                    </Link>
                </li>
                <li>
                    <img src="/img/user.svg" alt="Пользователь" className='cursor-pointer'/>
                </li>
            </ul>
        </header>
    )
}