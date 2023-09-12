import React from "react";

export function Card(){
    return (
        <div className="card mt-5">
            <div className="favorite">
                <img src="/img/heart_unliked.svg" alt="Unliked"/>
            </div>
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
    )
}