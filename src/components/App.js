import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

function App() {
    
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer greeting={'Bienvenidos'}/>
        </div>
    )
}

export default App