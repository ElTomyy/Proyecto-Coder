import { useParams } from "react-router-dom"
import ItemCards from "../components/ItemCards/ItemCards"


function Consolas ( {doc} ) {

    const params = useParams()

    return (
        <div>
            <ItemCards doc={doc}/>
        </div>
    )

}

export default Consolas