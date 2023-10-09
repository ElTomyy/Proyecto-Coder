import "bulma/css/bulma.css"
import LogoPlay from "../../images/logo-play.png"
import CartWidget from "../CartWidget/CartWidget"
import SearchBar from "../SearchBar/SearchBar"
import searchImage from "../API/API"
import { Link } from "react-router-dom"

function NavBar({GetCards, GetCardsNav}) {

    const handleSubmit = async (search) => {
        let resultado = await searchImage(search)
        GetCards(resultado)
    }


    const handleClickConsolas = async () => {
        let resultado = await searchImage("Consolas")
        GetCardsNav(resultado)
    }

    const handleClickComponentes = async () => {
        let resultado = await searchImage("Componentes")
        GetCardsNav(resultado)
    }

    const handleClickJuegos  = async () => {
        let resultado = await searchImage("Juegos")
        GetCardsNav(resultado)
    }

    const handleClickAccesorios = async () => {
        let resultado = await searchImage("Accesorios")
        GetCardsNav(resultado)
    }

    return (
        <div className="box">
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item" href=""><Link to="/"><img src={LogoPlay} alt="logo playstation"></img><strong className="block pdl-10">Easy Gaming</strong></Link></a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">

                        <Link value="Consolas" onClick={handleClickConsolas} className="navbar-item" to="/Consolas">Consolas</Link>

                        <Link value="Componentes" onClick={handleClickComponentes} className="navbar-item" to="/Componentes">Componentes</Link>

                        <Link value="Juegos" onClick={handleClickJuegos} className="navbar-item" to="/Juegos">Juegos</Link>

                        <Link value="Accesorios" onClick={handleClickAccesorios} className="navbar-item" to="/Acessorios">Accesorios</Link>

                    </div>

                    <div className="navbar-end">
                        <SearchBar enSubmit={handleSubmit}/>
                        <CartWidget/>
                    </div>
                    

                </div>
            </nav>
        </div>
    )
}

export default NavBar