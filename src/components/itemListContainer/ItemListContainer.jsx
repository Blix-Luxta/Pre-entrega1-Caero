import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Card , Row, Col} from 'antd';
import ItemProd from "../card/ItemProd"

const { Meta } = Card;



function ItemListContainer({greeting}){

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>{
                setProducts(json)
                console.log(json)})
            .catch(err=>console.error(err))
    },[])
    return(
    <>
        <div style={{display:"flex", flexWrap:"wrap", gap: "4em"}}>
        {products.map(prod => <ItemProd style={{margin: "5px"}}product={prod} key={prod.id}/>)}
        </div>
            
    </>
    )
}



export default ItemListContainer