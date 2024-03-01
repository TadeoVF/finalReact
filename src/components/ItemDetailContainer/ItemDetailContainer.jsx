import './ItemDetailContainer.css'
import {useState, useEffect}  from 'react'
import  ItemDetail from '../ItemDetail/ItemDetail'
import {useParams}  from 'react-router-dom';
import {getDoc, doc} from  "firebase/firestore";
import {db} from '../../services/firebase/firestoreConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ([]);

    const {itemId} = useParams();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "cafe", itemId)

        getDoc(docRef)
        .then(res => {
            const data = res.data()
            const productAdapted = {id: res.id, ...data}
            setProduct(productAdapted)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])
console.log(product)
    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer 

/*
import './ItemDetailContainer.css'
import {useEffect, useState} from  'react';
import {useParams}  from 'react-router-dom';
import {doc, getDoc, getFirestore}  from  'firebase/firestore';
import  ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const db = getFirestore()

        const oneItem = doc(db, "cafe", `${id}`)
        getDoc(oneItem).then((res)=>{
            if(res.exists()) {
                const doc = res.data()
                setProduct({...doc})
            }
    })
}, [id])
console.log (product)

return (
    <div className="ItemDetailContainer">
        <ItemDetail {...product} />
    </div>
);
}

export default ItemDetailContainer*/