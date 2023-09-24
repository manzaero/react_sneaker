import React, {useEffect, useState} from "react";
import {Index} from "./components/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const onAddToCart = (obj) => {
        axios.post('https://650888ed56db83a34d9c7a5d.mockapi.io/cart', obj)
        setCartItem(prev => [...prev, obj])
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }
    const clearInput = () => {
        setSearchValue('')
    }

    useEffect(() => {
        axios.get('https://650888ed56db83a34d9c7a5d.mockapi.io/items')
            .then(res => setItems(res.data))
        axios.get('https://650888ed56db83a34d9c7a5d.mockapi.io/cart')
            .then(res => setCartItem(res.data))
    }, [])

    const [onDrawer, setOnDrawer] = useState(false)

    const onRemoveCartItem = (id) => {
        console.log(id)
        axios.delete(`https://650888ed56db83a34d9c7a5d.mockapi.io/cart/${id}`)
        setCartItem(prev => prev.filter(item => item.id !== id))
    }

    return (<div className="wrapper">
        {onDrawer && <Drawer
            onRemove={onRemoveCartItem}
            items={cartItem}
            closeCart = {() => setOnDrawer(!onDrawer)}/>}
        <Header onClickCard = {() => setOnDrawer(!onDrawer)}/>
        <div className="content p-10">
            <div className="flex justify-between">
                <h1 className='font-bold text-2xl m-0'>{searchValue ? `поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block flex">
                    <img src="/img/search.svg" alt="Search"/>
                    {searchValue && <img
                        onClick={clearInput}
                        src="/img/remove_snake.svg"
                        className='clear'
                        alt="clear"/>}
                    <input className='' onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...' type="text"/>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {items
                    .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item) => (
                    <Index
                        key={item.image}
                        title={item.name}
                        price={item.price}
                        image={item.image}
                        // onToFavorite={() => console.log('Добавили в закладки')}
                        addToCard={(obj) => onAddToCart(obj)}
                    />
                ))}
            </div>
        </div>
    </div>);
}

export default App;
