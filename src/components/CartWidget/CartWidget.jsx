import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import {CartContext} from  '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext)
    return(
      <Link to='/cart'  className='cartIcon' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>     
      <ShoppingCartIcon/>
      <span>{totalQuantity}</span>
     </Link>
    );
}

export default CartWidget