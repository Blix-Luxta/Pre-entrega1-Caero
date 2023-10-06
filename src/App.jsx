import Navbar from "./components/navbar/NavBar"
import './App.css'
import ItemListContainer from "./components/itemListContainer/ItemListContainer"

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Bienvenido a Allegro"/>
    </>
  )
}

export default App
