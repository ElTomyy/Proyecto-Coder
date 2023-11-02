import { deleteItemCart } from "../API/API"

function ShowCart({ doc, ReLoadCarrito }) {

    const DeleteItemCart = async () => {
        await deleteItemCart(doc.id)
        console.log("Se a eliminado el elemento")
        ReLoadCarrito(true)
    }

    if (doc.Nombre != "PrecioTotal") {
        return (
            <div className="div-cart-item box">
                <img src={doc.Url} className="max-img-cart" />
                <div className="pl-5 div-cart-data">
                    <h1>Precio: {doc.Precio}</h1>
                    <h2>Stock: {doc.Stock}</h2>
                    <button onClick={DeleteItemCart} className="button">Eliminar</button>
                </div>
            </div>
        )
    }
}

export default ShowCart