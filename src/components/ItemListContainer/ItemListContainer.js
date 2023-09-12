import "bulma/css/bulma.css"

const ItemListContainer = ({ greeting}) => {

    return (
        <div>
            <h1 className="text-align"><strong>{greeting}</strong></h1>
        </div>
    )
}

export default ItemListContainer