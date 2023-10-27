import React from "react";
import {Index} from "../components/Card";

function Favorites({items}) {
    return (
        <div className="content p-10">
            <div className="flex justify-between">
                <h1 className='font-bold text-2xl m-0'>Мои закладки</h1>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {items.map((item) =>
                    <Index
                        key={item.image}
                        title={item.name}
                        price={item.price}
                        image={item.image}
                        favorite={true}
                    />)}
            </div>
        </div>
    );
}

export default Favorites