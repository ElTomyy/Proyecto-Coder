import ShowCards from "../ShowCards/ShowCards"

function ItemCards ({images}) {

    const RenderImages = images.map((e) => {
        return <ShowCards images={e}/>
    })

    return <div>{RenderImages}</div>
}

export default ItemCards