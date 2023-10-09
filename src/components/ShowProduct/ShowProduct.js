
function ShowProduct ( {element} ) {

    console.log(element)

    return (
        <div>
            <h1>Este es el elemento {element.alt_description}</h1>
            <img src={element.urls.small}/>
            <h2>Likes: {element.likes}</h2>
        </div>
    )
}

export default ShowProduct