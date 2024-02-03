import React, {useEffect, useState} from "react";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
    const [items, setItems] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [onDrawer, setOnDrawer] = useState(true)
    const [isLoading, setIsLoading] = useState(true)


    const totalPrice = cartItem.reduce((sum, obj) => parseInt(obj.price) + sum, 0)

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const clearInput = () => {
        setSearchValue('')
    }

    useEffect(() => {
        async function resData(){
            try {
                const cartResponse = await axios.get('https://650888ed56db83a34d9c7a5d.mockapi.io/cart')
                const favoriteResponse = await axios.get('https://6521afeba4199548356d7bb1.mockapi.io/favorites')
                const itemsResponse = await axios.get('https://650888ed56db83a34d9c7a5d.mockapi.io/items')


                setIsLoading(false)
                setCartItem(cartResponse.data)
                setFavorites(favoriteResponse.data)
                setItems(itemsResponse.data)
            } catch (error) {
                alert('Ошибка при запросе данных!')
                console.error(error)
            }
        }
        resData()
    }, [])

    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItem.find( (item) => Number(item.parentId)  === Number(obj.id))
            if (findItem){
                setCartItem((prev) => prev.filter((item) => Number(item.parentId) !== obj.title))
                await axios.delete(`https://650888ed56db83a34d9c7a5d.mockapi.io/cart/${findItem.id}`)
            } else {
                setCartItem(prev => [...prev, obj])
                const {data} = await axios.post('https://650888ed56db83a34d9c7a5d.mockapi.io/cart', obj)
                setCartItem(prev => prev.map(item =>{
                    if (item.parentId === data.parentId){
                        return  {
                            ...item,
                            id: data.id
                        }
                    }
                    return item
                }))
            }
        } catch (error) {
            alert('Ошибка при добавлении в корзину')
            console.error(error)
        }
    }

    const onAddFavorites = async (obj) => {
        try {
            if (favorites.find((item) => +item.id === +obj.id)){
                await axios.delete(`https://6521afeba4199548356d7bb1.mockapi.io/favorites/${obj.id}`)
                setFavorites(prev => prev.filter((item) => item.id !== obj.id))
            } else {
                const { data } = await axios.post('https://6521afeba4199548356d7bb1.mockapi.io/favorites', obj)
                setFavorites(prev => [...prev, data])
            }
        }   catch (error) {
            alert('Не удалось добавить в избранное!')
            console.error(error)
        }
    }

    const onRemoveCartItem = async (id) => {
        try {
            await axios.delete(`https://650888ed56db83a34d9c7a5d.mockapi.io/cart/${id}`)
            setCartItem(prev => prev.filter(item => Number(item.id) !== Number(id)))
        } catch (error) {
            alert('Ошибка приудалении из корзины!')
            console.log(error)
        }
    }

    const isItemAdded = (id) => {
        return cartItem.some(obj => Number(obj.parentId) === Number(id))
    }

    const closeCart = () => setOnDrawer(!onDrawer)

    return (
        <AppContext.Provider value={{ items, cartItem, favorites, onAddFavorites, isItemAdded, closeCart, setCartItem, totalPrice, onAddToCart }}>
            <div className="wrapper">

                <Drawer
                    key={cartItem.title}
                    onRemove={onRemoveCartItem}
                    items={cartItem}
                    opened={onDrawer}
                />

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
                    <Route path='favorites' element={
                        <Favorites onAddFavorites={onAddFavorites}/>
                    }>
                    </Route>
                    <Route path='orders' element={
                        <Orders/>
                    }>

                    </Route>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
