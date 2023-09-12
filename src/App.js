import {Card} from "./components/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";


function App() {
  return (
    <div className="wrapper">
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
                <Card/>
            </div>
        </div>
    </div>
  );
}

export default App;
