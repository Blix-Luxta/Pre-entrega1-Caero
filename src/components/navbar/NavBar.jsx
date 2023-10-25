import {Col, Row, Layout } from 'antd';
import { Link, NavLink } from "react-router-dom"
import CartWidget from "../cartWidget/CartWidget"
const {Header} = Layout


function NavBar() {
  const items1 =  [
    "Electronics",
    "Jewelery",
    "Men's clothing",
    "Women's clothing"
    ]


  return (
    <Row>
  <Col xs={24}>    
    <nav style={{ display:"flex",height:"6em", marginBottom:"5px", background:"coral", flexWrap:"wrap"}}>
      <div style={{display:"flex", flexDirection: "row", height:"12em", marginBottom:"5px",  justifyContent: "space-between", alignContent: "center",}}>
      <Link to={'/'}>
        <h3 style={{marginRight:"3rem"}}>Allegro</h3>
      </Link>
        <div className="Categorias" style={{display:"flex", flexDirection: "row", justifyContent: "space-between", gap:"2rem"}}>
          <NavLink to={`/category/Electronics`} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Electronics</NavLink>
          <NavLink to={`/category/Jewelery`} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Jewelery</NavLink>
          <NavLink to={`/category/Mensclothing`} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Men's clothing</NavLink>
          <NavLink style={{paddingRight:"15em"}} to={`/category/Womensclothing`} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Women's clothing</NavLink>

      </div>
      </div>
      <CartWidget/>
    </nav>
    </Col>
    </Row>
  );
}

export default NavBar