import React, { useEffect, useState} from "react";
import axios from "axios";
import {Index} from "../components/Card";

function Orders() {

    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://6521afeba4199548356d7bb1.mockapi.io/orders')
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            } catch (e) {
                alert('Ошибка при загрузке товара')
                console.error(e)
            }
        })()
    }, [])


    return (
        <div className="content p-10">
            <div className="flex justify-between">
                <h1 className='font-bold text-2xl m-0'>Приобретённый товар</h1>
            </div>
            <div className="grid">
                {
                    (isLoading
                        ?  [...Array(8)]
                        : orders).map((item, index) => (
                        <Index
                            {...item}
                            key={index}
                            loading={isLoading}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Orders