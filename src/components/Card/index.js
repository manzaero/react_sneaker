import React, {useContext, useState} from "react";
import styles from './Card.module.scss'
import ContentLoader from 'react-content-loader'
import AppContext from "../../context";

export function Index({
                          id,
                          name,
                          image,
                          price,
                          onFavorites,
                          addToCard,
                          favorite = false,
                          loading
}){

    const {isItemAdded} = useContext(AppContext)
    const [isFavorite, setIsFavorite] = useState(favorite);
    const obj = {id, parentId: id, name, image, price}
    const onClick = () => {
        addToCard(obj)
    }

    const onLiked = () => {
        onFavorites(obj)
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            {
                loading ?
                    <ContentLoader
                        speed={2}
                        width={155}
                        height={187}
                        viewBox="0 0 150 187"
                        backgroundColor="#f2f2f2"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="10" ry="10" width="155" height="90" />
                        <rect x="236" y="163" rx="0" ry="0" width="0" height="1" />
                        <rect x="0" y="125" rx="3" ry="3" width="92" height="15" />
                        <rect x="0" y="166" rx="8" ry="8" width="80" height="25" />
                        <rect x="118" y="157" rx="8" ry="8" width="32" height="32" />
                        <rect x="0" y="106" rx="0" ry="0" width="155" height="15" />
                    </ContentLoader> :
                    <>
                    <div className="favorite cursor-pointer">
                        {onFavorites && <img onClick={() => onLiked()} src={isFavorite ? 'react_sneaker/img/liked.svg' : 'react_sneaker/img/unliked.svg'}
                              alt="Unliked"/>}
                    </div>
                        <img className='img-cart' width='100%' height={135} src={image} alt=""/>
                        <p className='text-sm my-3.5'>{name}</p>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <p className='price uppercase uppercase'>Цена</p>
                            <p className='text-sm font-bold'>{price}руб.</p>
                        </div>
                        {addToCard && <img className='cursor-pointer' onClick={() => onClick()}
                              src={isItemAdded(id) ? 'react_sneaker/img/checked.svg' : 'react_sneaker/img/button.svg'} alt=""/>}
                    </div>
                    </>
            }
        </div>
    )
}