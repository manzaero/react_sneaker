import {Index} from "../components/Card";
import React from "react";

function Home({
                  items,
                  cartItem,
                  searchValue,
                  onAddToCart,
                  onChangeSearchInput,
                  onAddFavorites,
                  clearInput }) {
    return (
        <div className="content p-10">
            <div className="flex justify-between">
                <h1 className='font-bold text-2xl m-0'>{searchValue ? `поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block flex">
                    <img src="/img/search.svg" alt="Search"/>
                    {searchValue && <img
                        onClick={() => clearInput()}
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
                            added={cartItem.some(obj => obj.id === item.id)}
                            key={item.image}
                            title={item.name}
                            id={item.id}
                            price={item.price}
                            image={item.image}
                            onFavorites={(obj) => onAddFavorites(obj)}
                            addToCard={(obj) => onAddToCart(obj)}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Home