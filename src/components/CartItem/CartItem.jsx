import './CartItem.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ product }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <article className="CartItem">
            <img src={product.img} alt={product.name} />
            <div className="CartItem-details">
                <p>{product.name}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Price: {product.price}</p>
                <p>Total: {product.quantity * product.price}</p>
            </div>
            <button className="CartItem-button" onClick={() => removeItem(product.id)}>Eliminar</button>
        </article>
    );
}

export default CartItem;

