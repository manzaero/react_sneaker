import React, {useState} from "react";
import styles from './Card.module.scss'

export function Index(props){
    const [checked, setChecked] = useState(false);
    const onClick = () => {
        setChecked(true)
    }
    console.log(checked)
    return (
        <div className={styles.card}>
            <div className="favorite cursor-pointer" onClick={props.onToFavorite}>
                <img src="/img/heart_unliked.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src={props.image} alt=""/>
            <p className='text-sm my-3.5'>{props.title}</p>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p className='price uppercase uppercase'>Цена</p>
                    <p className='text-sm font-bold'>{props.price}руб.</p>
                </div>
                <img className='cursor-pointer' onClick={onClick} src={checked ? '/img/checked.svg' : '/img/button.svg'} alt=""/>
            </div>
        </div>
    )
}