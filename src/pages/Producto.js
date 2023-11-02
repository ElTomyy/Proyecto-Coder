import { useParams } from "react-router-dom"
import ShowProduct from "../components/ShowProduct/ShowProduct"

function Producto( {doc} ) {

    const params = useParams()

    const product = doc.map((e) => {
        
        if (e.id == params.productoId){
            
            return <ShowProduct element={e} />
        }
    }) 

    return product

}

export default Producto