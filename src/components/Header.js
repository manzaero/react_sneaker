export function Header(props){
    return (
        <header className='flex justify-between	p-10'>
            <div className="flex items-center">
                <img src='/img/logo.png' alt='Logo' className='mr-4'/>
                <div>
                    <h3 className='mb-0 text-xl font-bold uppercase'>Sneakers shop</h3>
                    <p className='mt-0'>Магазин обуви</p>
                </div>
            </div>
            <ul className="flex items-center">
                <li className='flex cursor-pointer' onClick={props.onClickCard}>
                    <img src="/img/cart.svg" alt="" className='mr-2.5'/>
                    <span className='mr-8'>1205 ru.</span>
                </li>
                <li>
                    <img src="/img/heart.svg" alt="" className='mr-8'/>
                </li>
                <li>
                    <img src="/img/user.svg" alt="" className=''/>
                </li>
            </ul>
        </header>
    )
}