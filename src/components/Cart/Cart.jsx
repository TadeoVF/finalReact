import './Cartstyles.css';
import { useContext } from 'react';
import CartItem from '../../components/CartItem/CartItem';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="Cart">
                <h1 className="Cart-empty">Tu carrito está vacío</h1>
                <Link to='/' className="Cart-link">Productos</Link>
            </div>
        );
    }

    return (
        <div className="Cart">
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: $ {total}</h3>
            <button className="Cart-button" onClick={() => clearCart()}>Limpiar carrito</button>
            <Link to='/checkout' className="Cart-button">Checkout</Link>
        </div>
    );
}

export default Cart;
