import ShowCards from "../ShowCards/ShowCards"

function ItemCards ( {doc} ) {

    const RenderImages = doc.map((e) => {
        return <ShowCards doc={e} />
    })

    return <div className="div-container">{RenderImages}</div>
}

export default ItemCards