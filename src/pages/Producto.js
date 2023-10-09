import { useParams } from "react-router-dom"
import ShowProduct from "../components/ShowProduct/ShowProduct"

function Producto( {images} ) {

    const params = useParams()

    const imagen = images.map((e) => {
        
        if (e.id == params.productoId){
            
            return <ShowProduct element={e}/>
        }
    }) 

    return <div>{imagen}</div>

}

export default Producto