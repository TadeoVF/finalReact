import "./itemListContainerStyle.css"
import { useEffect, useState } from "react";
import { getProducts, getProductByCategory } from "../../Mocks";
import ItemList from  "../ItemList/ItemList";
import {useParams}  from 'react-router-dom';


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    
    useEffect ( () => {
        const asyncFunc = categoryId ?  getProductByCategory : getProducts;
        asyncFunc(categoryId)
            .then(res => {setProducts(res)})
            .catch(err => {console.error(err)})
    }, [categoryId]) 


    return(
        <div className="itemListContainer">
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer