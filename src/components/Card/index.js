import React, {useState} from "react";
import styles from './Card.module.scss'
import ContentLoader from 'react-content-loader'

export function Index({
                          id,
                          name,
                          image,
                          price,
                          onFavorites,
                          addToCard,
                          favorite = false,
                          added = false,
                          loading
}){

    const [isAdded, setIsAdded] = useState(added);

    const [isFavorite, setIsFavorite] = useState(favorite);
    const onClick = () => {
        addToCard({id, name, image, price})
        setIsAdded(!isAdded)
    }

    const onLiked = () => {
        onFavorites({id, name, image, price})
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
                        <img onClick={() => onLiked()} src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked"/>
                    </div>
                        <img width='100%' height={135} src={image} alt=""/>
                        <p className='text-sm my-3.5'>{name}</p>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <p className='price uppercase uppercase'>Цена</p>
                            <p className='text-sm font-bold'>{price}руб.</p>
                        </div>
                        <img className='cursor-pointer' onClick={() => onClick()} src={isAdded ? '/img/checked.svg' : '/img/button.svg'} alt=""/>
                    </div>
                    </>
            }
        </div>
    )
}