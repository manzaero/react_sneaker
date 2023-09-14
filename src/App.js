import {Index} from "./components/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";

const arr = [{
    name: 'Мужские Кроссовки Nike Blazer Mid Suede', image: './img/sneak/image1.jpg', price: '12 999'
}, {
    name: 'Мужские Кроссовки Nike Blazer Suede', image: './img/sneak/image2.jpg', price: '12 231'
}, {
    name: 'Мужские Кроссовки Nike Blazer Mid', image: './img/sneak/image3.jpg', price: '14 999'
}, {
    name: 'Мужские Кроссовки Nike  Mid Suede', image: './img/sneak/image7.jpg', price: '22 999'
}]

function App() {
    return (<div className="wrapper">
        <Drawer/>
        <Header/>
        <div className="content p-10">
            <div className="flex justify-between">
                <h1 className='font-bold text-2xl m-0'>Все кроссовки</h1>
                <div className="search-block flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input className='' placeholder='Поиск...' type="text"/>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {arr.map(val => (
                    <Index
                        title={val.name}
                        price={val.price}
                        image={val.image}
                        onClick={() => console.log(val.name)}
                    />
                ))}
            </div>
        </div>
    </div>);
}

export default App;
