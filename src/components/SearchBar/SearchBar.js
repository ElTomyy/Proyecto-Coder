
import { useState } from "react"

function SearchBar({ enSubmit }) {

    const [search, newSearch] = useState("")

    function handleFormSubmit(e) {
        e.preventDefault()
        enSubmit(search)
    }

    function handleChange (e) {
        newSearch(e.target.value)

    }

    return (
        <div className="navbar-item">
            <form onSubmit={handleFormSubmit}>
                <input value={search} className="navabr-item input" placeholder="Search" onChange={handleChange} />
            </form>
        </div>
    )
}

export default SearchBar