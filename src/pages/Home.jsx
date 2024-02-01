import {Index} from "../components/Card";
import React from "react";

function Home({
                  items,
                  searchValue,
                  onAddToCart,
                  onChangeSearchInput,
                  onAddFavorites,
                  clearInput,
                  isLoading
}) {


    const renderItems = () => {

        const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        return (isLoading
            ?  [...Array(8)]
            : filteredItems)
            .map((item, index) => (
                <Index
                    {...item}
                    key={index}
                    onFavorites={(obj) => onAddFavorites(obj)}
                    addToCard={(obj) => onAddToCart(obj)}
                    loading={isLoading}
                />
            ))
    }
    return (
        <div className="content p-10">
            <div className="flex justify-between">
                <h1 className='font-bold text-2xl m-0'>{searchValue ? `поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block flex">
                    <img src="react_sneaker/img/search.svg" alt="Search"/>
                    {searchValue && <img
                        onClick={() => clearInput()}
                        src="react_sneaker/img/remove_snake.svg"
                        className='clear'
                        alt="clear"/>}
                    <input className='' onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...' type="text"/>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {renderItems()}
            </div>
        </div>
    );
}

export default Home