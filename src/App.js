import React, {useEffect, useState} from "react";
import {Index} from "./components/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";

function App() {
    const [items, setItems] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const onAddToCart = (obj) => {
        setCartItem(prev => [...prev, obj])
    }

    useEffect(() => {
        fetch('https://650888ed56db83a34d9c7a5d.mockapi.io/items')
            .then(res => res.json())
            .then(res => setItems(res))
    }, [])
    const [onDrawer, setOnDrawer] = useState(false)
    return (<div className="wrapper">
        {onDrawer && <Drawer
            items={cartItem}
            closeCart = {() => setOnDrawer(!onDrawer)}/>}
        <Header onClickCard = {() => setOnDrawer(!onDrawer)}/>
        <div className="content p-10">
            <div className="flex justify-between">
                <h1 className='font-bold text-2xl m-0'>Все кроссовки</h1>
                <div className="search-block flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input className='' placeholder='Поиск...' type="text"/>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {items.map((val, i) => (
                    <Index
                        key={i}
                        title={val.name}
                        price={val.price}
                        image={val.image}
                        onToFavorite={() => console.log('Добавили в закладки')}
                        addToCard={(obj) => onAddToCart(obj)}
                    />
                ))}
            </div>
        </div>
    </div>);
}

export default App;
