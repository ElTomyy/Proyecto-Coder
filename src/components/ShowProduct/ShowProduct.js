import { Link } from "react-router-dom"
import { updateCartList } from "../API/API"

function ShowProduct({ element }) {

    const AddToCart = () => {
        updateCartList(element)
    }

    return (
        <div className="div-product">
            <div className="div-grid box">
                <img className="image product-image" src={element.Url} />
                <div className="product-info">
                    <div className=" div-product-stats box">
                        <h1 className="pdb-25"><strong>{element.Nombre}</strong></h1>
                        <h2 className="pdb-25">Precio: {element.Precio}</h2>
                        <h2 className="pdb-25">Likes: {element.Likes}</h2>
                        <h2 className="pdb-25">Stock: {element.Stock}</h2>
                        <Link onClick={AddToCart} to="/Carrito" className="button">Agregar al carrito</Link>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, veritatis. Ab esse accusamus ipsa earum minus quia! Molestias quam sunt rerum quo natus distinctio iste qui suscipit error dolor quis est ipsam dolore aspernatur a omnis optio ad, tempora eveniet veniam in quisquam. Minima a qui laudantium vitae perferendis totam aspernatur, quo tempora ex omnis incidunt reiciendis recusandae velit ipsa commodi quam suscipit assumenda repellat voluptas nam, expedita aliquid voluptatem! Temporibus dignissimos molestiae perspiciatis fuga dolor? Facere atque doloribus odit molestias architecto laborum quos obcaecati, dignissimos quasi minus error iusto recusandae ad asperiores facilis omnis dolor reiciendis. Dolorum, aspernatur amet.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ShowProduct