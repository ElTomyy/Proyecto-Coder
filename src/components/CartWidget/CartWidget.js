import LogoCarrito from "../../images/logo-carrito.png"

const CartWidget = () => {

    return (
        <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link"><strong className="pdr-10">2</strong><img src={LogoCarrito} alt="logo carrito"></img></a>

                <div className="navbar-dropdown">

                    <a className="navbar-item">Playstation 5</a>

                    <a className="navbar-item">Resident Evil 2</a>

                </div>
            </div>
        </div>
    )
}

export default CartWidget