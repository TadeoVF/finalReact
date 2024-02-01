import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, price, img}) => {
    return(
        <article  className="card">
            <h3>{name}</h3>
            <img src={img} alt={name} />
            <div className='info'>
                <span> <b>${price}</b></span>
            </div>
            <Link to={`/item/${id}`} >Detalle</Link>
        </article>
    )
}

export default Item