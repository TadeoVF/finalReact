import "./itemListContainerStyle.css"
import { useEffect, useState } from "react";
import ItemList from  "../ItemList/ItemList";
import {useParams}  from 'react-router-dom';
import {collection, getDocs, where, query} from 'firebase/firestore'
import {db} from   "../../services/firebase/firestoreConfig"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(true);
    

    useEffect(()=>{
        setLoading(true)
        const collectionRef = categoryId 
        ? query(collection(db, 'cafe'), where('category', '==', categoryId)) : collection(db,'cafe')

        getDocs(collectionRef)
        .then(res =>{const productsAdapted = res.docs.map(doc =>{const data= doc.data()
        return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId, db])

    return(
        <div className="itemListContainer">
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer