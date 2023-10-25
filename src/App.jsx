import Navbar from "./components/navbar/NavBar"
import './App.css'
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemDetail from "./components/itemDetail/itemDetail"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Layout, Menu, theme } from 'antd';
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer"

function App() {
  const { Header, Content, Footer } = Layout;

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route exact path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route exact path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      <Footer style={{ textAlign: 'center', display:"inline-block" }}>Allegro ©2023 Created by Nahuel Caero</Footer>
    </BrowserRouter>

    </>
  )
}

export default App
