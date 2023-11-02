import { Link } from "react-router-dom";

function NoData () {

    return (
        <div>
            <h1>No disponemos de estos elementos por el momento, disculpe las molestias</h1>
            <Link to="/" className="button">Volver al inicio</Link>
        </div>
    )
}

export default NoData