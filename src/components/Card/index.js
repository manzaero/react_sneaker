import React from "react";
import styles from './Card.module.scss'

export function Index(props){
    return (
        <div className={styles.card}>
            <div className="favorite">
                <img src="/img/heart_unliked.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src={props.image} alt=""/>
            <p className='text-sm my-3.5'>{props.title}</p>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p className='price uppercase uppercase'>Цена</p>
                    <p className='text-sm font-bold'>{props.price}руб.</p>
                </div>
                <button onClick={props.onClick}><img src="/img/button.svg" alt=""/></button>
            </div>
        </div>
    )
}