import './Checkout.css';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/firebase/firestoreConfig';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import React, { useState, useContext } from 'react';
import { Timestamp, writeBatch, collection, getDocs, query, where, addDoc, documentId } from 'firebase/firestore';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: { name, phone, email },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(product => product.id);
            const productsRef = collection(db, 'cafe');
            const productsAddedFS = await getDocs(query(productsRef, where(documentId(), 'in', ids))); 
            const { docs } = productsAddedFS;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { 'stock': stockDb - prodQuantity }); // Utiliza prodQuantity
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error('Productos fuera de stock');
            }
        }

        catch (err) {
            console.log(err);
        }

        finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (<h4>Generando orden</h4>);
    }

    if (orderId) {
        return (<h4>Id de su orden: {orderId}</h4>);
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
}

export default Checkout;
