import "bulma/css/bulma.css"
import LogoPlay from "../../images/logo-play.png"
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {

    return (
        <div className="box">
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item" href=""><img src={LogoPlay} alt="logo playstation"></img><strong className="block pdl-10">Easy Gaming</strong></a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">

                        <a className="navbar-item">Consolas</a>

                        <a className="navbar-item">Componentes</a>

                        <a className="navbar-item">Juegos</a>

                        <a className="navbar-item">Accesorios</a>

                        <a></a>

                    </div>

                    <CartWidget/>

                </div>
            </nav>
        </div>
    )
}

export default NavBar