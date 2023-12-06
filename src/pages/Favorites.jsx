import React, {useContext} from "react";
import {Index} from "../components/Card";
import AppContext from "../context";

function Favorites() {

    const { favorites, onAddFavorites, onAddToCart } = useContext(AppContext)

    return (
        <div className="content p-10">
            <div className="flex justify-between">
                <h1 className='font-bold text-2xl m-0'>Мои закладки</h1>
            </div>
            <div>
                <h3>Тут мои кроссовки</h3>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {favorites.map((item, i) =>
                    <Index
                        key={i}
                        {...item}
                        addToCard={obj => onAddToCart(obj)}
                        favorite={true}
                        onFavorites={onAddFavorites}
                    />)}
            </div>
        </div>
    );
}

export default Favorites