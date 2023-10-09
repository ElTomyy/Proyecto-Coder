
function ShowCards({images}) {
    
    return (
        <div className="card div-flex box">
            <img className="card-image " src={images.urls.small}/>
            <button className="button">+info</button>
        </div>
    )

}

export default ShowCards