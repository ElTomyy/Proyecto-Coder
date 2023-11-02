import { Link } from "react-router-dom"
import ShowCart from "../ShowCart/ShowCart"

function CartItems({ doc, ReLoadCarrito }) {

    const RenderCart = doc.map((e) => { 
        return <ShowCart doc={e} ReLoadCarrito={ReLoadCarrito}/>
    })

    return (
        <div className="div-cart">
            <div className="div-cart-list">
                {RenderCart}
            </div>
            <div className="div-cart-list-data">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, veritatis. Ab esse accusamus ipsa earum minus quia! Molestias quam sunt rerum quo natus distinctio iste qui suscipit error dolor quis est ipsam dolore aspernatur a omnis optio ad, tempora eveniet veniam in quisquam. Minima a qui laudantium vitae perferendis totam aspernatur, quo tempora ex omnis incidunt reiciendis recusandae velit ipsa commodi quam suscipit assumenda repellat voluptas nam, expedita aliquid voluptatem! Temporibus dignissimos molestiae perspiciatis fuga dolor? Facere atque doloribus odit molestias architecto laborum quos obcaecati, dignissimos quasi minus error iusto recusandae ad asperiores facilis omnis dolor reiciendis. Dolorum, aspernatur amet.</p>
                <Link className="button pdt-5" to="/">Seguir Comprando</Link>
            </div>
        </div>
    )
}

export default CartItems