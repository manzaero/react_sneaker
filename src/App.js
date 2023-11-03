import React, {useEffect, useState} from "react";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
    const [items, setItems] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [sum, setSum] = useState(0)
    const [onDrawer, setOnDrawer] = useState(false)

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }
    const clearInput = () => {
        setSearchValue('')
    }



    useEffect(() => {
        axios.get('https://650888ed56db83a34d9c7a5d.mockapi.io/items')
            .then(res => setItems(res.data));
        axios.get('https://650888ed56db83a34d9c7a5d.mockapi.io/cart')
            .then(res => setCartItem(res.data));
        axios.get('https://6521afeba4199548356d7bb1.mockapi.io/favorites')
            .then(res => setFavorites(res.data));
    }, [])

    const onAddToCart = async (obj) => {
        try {
            if (cartItem.find( (item) => item.id === obj.id)){
                setCartItem((prev) => prev.filter((item) => item.title !== obj.title))
            } else {
                await axios.post('https://650888ed56db83a34d9c7a5d.mockapi.io/cart', obj)
                setCartItem(prev => [...prev, obj])
            }
        } catch (e) {
            alert('пустая корзина')
        }
    }

    const sumResult = () => {
        console.log(cartItem)
        setSum(cartItem.reduce((a, b) => a + b))
    }

    const onAddFavorites = async (obj) => {
        try {
            if (favorites.find((item) => item.id === obj.id)){
                await axios.delete(`https://6521afeba4199548356d7bb1.mockapi.io/favorites/${obj.id}`)
                setFavorites(prev => prev.filter((item) => item.id !== obj.id))
            } else {
                const { data } = await axios.post('https://6521afeba4199548356d7bb1.mockapi.io/favorites', obj)
                setFavorites(prev => [...prev, data])
            }
        }   catch (error) {
            alert('Не удаловь добавить в избранное!')
        }
    }

    const onRemoveCartItem = async (id) => {
        await axios.delete(`https://650888ed56db83a34d9c7a5d.mockapi.io/cart/${id}`)
        setCartItem(prev => prev.filter(item => item.id !== id))
    }

    return (<div className="wrapper">

        {onDrawer && <Drawer
            key={cartItem.title}
            onRemove={onRemoveCartItem}
            items={cartItem}
            closeCart = {() => setOnDrawer(!onDrawer)}/>
        }

        <Header onClickCard = {() => setOnDrawer(!onDrawer)} sumConst = {sum}/>

            <Routes>
                <Route path='/' element={
                    <Home
                        items={items}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeSearchInput={onChangeSearchInput}
                        onAddFavorites={onAddFavorites}
                        onAddToCart={onAddToCart}
                        clearInput={clearInput}
                    />
                }>

                </Route>
                <Route path='/favorites' element={
                    <Favorites items={favorites} onAddFavorites={onAddFavorites}/>
                }>

                </Route>
            </Routes>
    </div>);
}

export default App;
