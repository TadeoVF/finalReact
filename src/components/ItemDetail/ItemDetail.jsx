import './ItemDetailStyles.css'
import ItemCount  from '../ItemCount/ItemCount';

const ItemDetail = ({name, price, stock, img, description, category}) => {
    return(
        <article  className="card">
            <h3>{name}</h3>
            <img src={img} alt={name} />
            <div className='info'>
                <p>{category}</p>
                <span> <b>${price}</b></span>
                <span>stock actual: {stock} unidades</span>
            </div>
            <p>{description}</p>
            <ItemCount min={0} stock={stock} agregar= {(count) => console.log(`agregado ${count} ${name} al carrito`)} />
        </article>
    )
}

export default ItemDetail