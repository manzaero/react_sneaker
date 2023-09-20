import React, {useState} from "react";
import styles from './Card.module.scss'

export function Index({title, image, price, onToFavorite, addToCard}){
    const [checked, setChecked] = useState(false);
    const onClick = () => {
        addToCard({title, image, price})
        setChecked(!checked)
    }
    console.log(checked)
    return (
        <div className={styles.card}>
            <div className="favorite cursor-pointer" onClick={onToFavorite}>
                <img src="/img/heart_unliked.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src={image} alt=""/>
            <p className='text-sm my-3.5'>{title}</p>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p className='price uppercase uppercase'>Цена</p>
                    <p className='text-sm font-bold'>{price}руб.</p>
                </div>
                <img className='cursor-pointer' onClick={onClick} src={checked ? '/img/checked.svg' : '/img/button.svg'} alt=""/>
            </div>
        </div>
    )
}