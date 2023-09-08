

function App() {
  return (
    <div className="wrapper list-none">
        <header className='flex justify-between	p-10'>
          <div className="flex items-center">
              <img src='/img/logo.png' className='mr-4'/>
              <div>
                  <h3 className='mb-0 text-xl font-bold uppercase'>Sneakers shop</h3>
                  <p className='mt-0'>Магазин обуви</p>
              </div>
          </div>
          <ul className="flex items-center">
              <li className='flex'>
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
        <div className="content p-10">
            <div className="flex justify-between">
                <h1 className='font-bold text-2xl m-0'>Все кроссовки</h1>
                <div className="search-block flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input className='' placeholder='Поиск...' type="text"/>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="card mt-5">
                    <img width={133} height={112} src="/img/sneak/image1.jpg" alt=""/>
                    <p className='text-sm my-3.5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <p className='price uppercase uppercase'>Цена</p>
                            <p className='text-sm font-bold'>12 999 руб.</p>
                        </div>
                        <button><img src="/img/button.svg" alt=""/></button>
                    </div>
                </div>
                <div className="card mt-5">
                    <img width={133} height={112} src="/img/sneak/image2.jpg" alt=""/>
                    <p className='text-sm my-3.5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <p className='price uppercase'>Цена</p>
                            <p className='text-sm font-bold'>12 999 руб.</p>
                        </div>
                        <button><img src="/img/button.svg" alt=""/></button>
                    </div>
                </div>
                <div className="card mt-5">
                    <img width={133} height={112} src="/img/sneak/image3.jpg" alt=""/>
                    <p className='text-sm my-3.5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <p className='price uppercase'>Цена</p>
                            <p className='text-sm font-bold'>12 999 руб.</p>
                        </div>
                        <button><img src="/img/button.svg" alt=""/></button>
                    </div>
                </div>
                <div className="card mt-5">
                    <img width={133} height={112} src="/img/sneak/image4.jpg" alt=""/>
                    <p className='text-sm my-3.5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <p className='price uppercase'>Цена</p>
                            <p className='text-sm font-bold'>12 999 руб.</p>
                        </div>
                        <button><img src="/img/button.svg" alt=""/></button>
                    </div>
                </div>
                <div className="card mt-5">
                    <img width={133} height={112} src="/img/sneak/image5.jpg" alt=""/>
                    <p className='text-sm my-3.5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <p className='price uppercase'>Цена</p>
                            <p className='text-sm font-bold'>12 999 руб.</p>
                        </div>
                        <button><img src="/img/button.svg" alt=""/></button>
                    </div>
                </div>
                <div className="card mt-5">
                    <img width={133} height={112} src="/img/sneak/image6.jpg" alt=""/>
                    <p className='text-sm my-3.5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <p className='price uppercase'>Цена</p>
                            <p className='text-sm font-bold'>12 999 руб.</p>
                        </div>
                        <button><img src="/img/button.svg" alt=""/></button>
                    </div>
                </div>
                <div className="card mt-5">
                    <img width={133} height={112} src="/img/sneak/image7.jpg" alt=""/>
                    <p className='text-sm my-3.5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <p className='price uppercase'>Цена</p>
                            <p className='text-sm font-bold'>12 999 руб.</p>
                        </div>
                        <button><img src="/img/button.svg" alt=""/></button>
                    </div>
                </div>
                <div className="card mt-5">
                    <img width={133} height={112} src="/img/sneak/image8.jpg" alt=""/>
                    <p className='text-sm my-3.5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <p className='price uppercase'>Цена</p>
                            <p className='text-sm font-bold'>12 999 руб.</p>
                        </div>
                        <button><img src="/img/button.svg" alt=""/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
