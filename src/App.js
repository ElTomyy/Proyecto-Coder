import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { useState } from 'react';
import Home from './pages/Home';
import Consolas from './pages/Consolas';
import Componentes from './pages/Componentes';
import Juegos from './pages/Juegos';
import Accesorios from './pages/Accesorios';
import NavBar from './components/NavBar/NavBar';
import Producto from './pages/Producto';
import Carrito from './pages/Carrito';
import NoData from './NoData/NoData';

function App() {

    const [cards, NewCards] = useState([])
    

    const CardsArray = (e) => {
        NewCards(e)
    }

    return (
        <BrowserRouter>
            <NavBar GetCards={CardsArray}/>
            <Routes>
                <Route path="/" element={<Home doc={cards} />} />
                <Route path="/Consolas" element={<Consolas doc={cards} />} />
                <Route path="/Componentes" element={<Componentes doc={cards} />} />
                <Route path="/Juegos" element={<Juegos doc={cards} />} />
                <Route path="/Accesorios" element={<Accesorios doc={cards} />} />
                <Route path="/Producto/:productoId" element={<Producto doc={cards} />} />
                <Route path="/Carrito" element={<Carrito/>} />
                <Route path='/Error' element={<NoData/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App