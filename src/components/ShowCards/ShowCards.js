import { Link } from "react-router-dom"

function ShowCards({ doc }) {

    return (
        <div className="box div-modify">
            <img className="max-size" src={doc.Url} alt={doc.Name}/>
            <h1><strong>{doc.Nombre}</strong></h1>
            <div className="div-stats pdt-10">
                <h2>${doc.Precio}</h2>
                <Link className="button is-rounded" to={`/Producto/${doc.id}`}>+Info</Link>
            </div>
        </div>
    )

}

export default ShowCards