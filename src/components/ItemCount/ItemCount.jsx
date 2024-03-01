import './ItemCount.css'
import {useState}  from 'react';

const ItemCount  = ({min, stock, onAdd}) =>{

    const [count, setCount] = useState(0);

    const add = () =>{
        if (count < stock) {setCount (count + 1)}
    }

    const subtract  = () => {
        if (count  > min) {setCount (count - 1)}
    }

    return (
        <div className='counter'>
            <h4>{count}</h4>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={() => onAdd(count)}>agregar al carrito</button>
        </div>
    );
}

export default ItemCount