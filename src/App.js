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
    const [onDrawer, setOnDrawer] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }
    const clearInput = () => {
        setSearchValue('')
    }



    useEffect(() => {
        async function resData(){
            const cartResponse = await axios.get('https://650888ed56db83a34d9c7a5d.mockapi.io/cart')
            const favoriteResponse = await axios.get('https://6521afeba4199548356d7bb1.mockapi.io/favorites')
            const itemsResponse = await axios.get('https://650888ed56db83a34d9c7a5d.mockapi.io/items')


            setIsLoading(false)
            setCartItem(cartResponse.data)
            setFavorites(favoriteResponse.data)
            setItems(itemsResponse.data)
        }
        resData()
    }, [])
    const onAddToCart = async (obj) => {
        try {
            if (cartItem.find( (item) => Number(item.id)  === Number(obj.id))){
                await axios.delete(`https://650888ed56db83a34d9c7a5d.mockapi.io/cart/${obj.id}`)
                setCartItem((prev) => prev.filter((item) => item.title !== obj.title))
            } else {
                await axios.post('https://650888ed56db83a34d9c7a5d.mockapi.io/cart', obj)
                setCartItem(prev => [...prev, obj])
            }
        } catch (error) {
            alert('пустая корзина')
        }
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

        <Header onClickCard = {() => setOnDrawer(!onDrawer)}/>

            <Routes>
                <Route path='/' element={
                    <Home
                        cartItem={cartItem}
                        items={items}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeSearchInput={onChangeSearchInput}
                        onAddFavorites={onAddFavorites}
                        onAddToCart={onAddToCart}
                        clearInput={clearInput}
                        isLoading={isLoading}
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
