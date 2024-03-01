import './ItemDetailStyles.css'
import ItemCount  from '../ItemCount/ItemCount';
import {useContext, useState} from  "react";
import {Link} from  "react-router-dom";
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({id, name, price, stock, img, description, category}) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

   
    return(
        <article  className="card">
            <h3>{name}</h3>
            <img src={img} alt={name} />
            <div className='info'>
                <p>{category}</p>
                <span> <b>${price}</b></span>
                <span>stock actual: {stock} unidades </span>
            </div>
            <p>{description}</p>
            {
                quantityAdded > 0 ? ( <Link to="/cart"> <button>Terminar compra</button>  </Link>   ) : (<ItemCount min={1} stock={stock} onAdd={handleOnAdd} />)
            }
        </article>
    )
}

export default ItemDetail