import { Link } from "react-router-dom"

function ShowCards({images}) {
    
    return (
        <div className="card div-flex box">
            <img className="card-image " src={images.urls.small}/>
            <Link to={`/Producto/${images.id}`}>+Info</Link>
        </div>
    )

}

export default ShowCards