import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "../itemDetail/itemDetail"



const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
                setProduct(json)})
            .catch(err=>console.error(err))
    },[])
    return(
        <>
        <h1>{product.tittle}</h1>
        <p>{product.descriptio}</p>
        </>
    )
}

export default ItemDetailContainer
