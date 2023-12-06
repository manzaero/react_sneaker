import React, {useContext} from "react";
import AppContext from "../context";

const Info = ({image, title, description}) => {
    const { closeCart } = useContext(AppContext)
    return (
        <div className="cartEmpty flex items-center justify-center flex-col">
            <img src={image} alt="" className="mb-2"/>
            <h2>{title}</h2>
            <button onClick={() => closeCart()} className='greenButton'><img src="/img/vector-back.svg" alt="VectorBack"/>{ description }</button>
        </div>
    )
}
export default Info