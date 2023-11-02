import "bulma/css/bulma.css"
import LogoPlay from "../../images/logo-play.png"
import LogoCarrito from "../../images/logo-carrito.png"
import SearchBar from "../SearchBar/SearchBar"
import { getItemList } from "../API/API"
import { Link } from "react-router-dom"
import { useEffect } from "react"

function NavBar({ GetCards }) {

    useEffect(async () => {
        let resultado = await getItemList("")
        GetCards(resultado)
    }, [])

    const handleSubmit = async (search) => {
        if (search != "" || search != "Consolas" || search != "Componentes" || search != "Juegos" || search != "Accesorios") {
            let resultado = await getItemList(search)
            GetCards(resultado)
        }
        else{
            console.log("Devolver error")
        }
    }

    const handleClickAll = async () => {
        let resultado = await getItemList("")
        GetCards(resultado)
    }

    const handleClickConsolas = async () => {
        let resultado = await getItemList("Consolas")
        GetCards(resultado)
    }

    const handleClickComponentes = async () => {
        let resultado = await getItemList("Componentes")
        GetCards(resultado)
    }

    const handleClickJuegos = async () => {
        let resultado = await getItemList("Juegos")
        GetCards(resultado)
    }

    const handleClickAccesorios = async () => {
        let resultado = await getItemList("Accesorios")
        GetCards(resultado)
    }

    return (
        <div className="box">
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/" onClick={handleClickAll}><img src={LogoPlay} alt="logo playstation"></img><strong className="block pdl-10">Easy Gaming</strong></Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">

                        <Link value="Consolas" onClick={handleClickConsolas} className="navbar-item" to="/Consolas">Consolas</Link>

                        <Link value="Componentes" onClick={handleClickComponentes} className="navbar-item" to="/Componentes">Componentes</Link>

                        <Link value="Juegos" onClick={handleClickJuegos} className="navbar-item" to="/Juegos">Juegos</Link>

                        <Link value="Accesorios" onClick={handleClickAccesorios} className="navbar-item" to="/Accesorios">Accesorios</Link>

                    </div>

                    <div className="navbar-end">
                        <SearchBar enSubmit={handleSubmit} />
                        <Link to="/Carrito" className="navbar-item"><img src={LogoCarrito} alt="logo carrito"></img></Link>
                    </div>


                </div>
            </nav>
        </div>
    )
}

export default NavBar