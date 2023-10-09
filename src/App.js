import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Home from './pages/Home';
import Consolas from './pages/Consolas';
import Componentes from './pages/Componentes';
import Juegos from './pages/Juegos';
import Accesorios from './pages/Accesorios';
import NavBar from './components/NavBar/NavBar';
import Producto from './pages/Producto';

function App() {

    const [cards, NewCards] = useState([])

    const CardsArray = (e) => {
        NewCards(e)
    }

    return (
        <BrowserRouter>
            <NavBar GetCards={CardsArray} />
            <Routes>
                <Route path="/" element={<Home images={cards} />}>
                    <Route path="Consolas" element={<Consolas images={cards} />} />
                    <Route path="Componentes" element={<Componentes images={cards} />} />
                    <Route path="Juegos" element={<Juegos images={cards} />} />
                    <Route path="Accesorios" element={<Accesorios images={cards} />} />
                </Route>
                    <Route path="Producto/:productoId" element={<Producto images={cards}/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default App