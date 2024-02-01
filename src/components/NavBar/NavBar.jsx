import "./navStyles.css"
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.jpg"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
      <nav className="NavBar">
        <img src={logo} alt="logo de la empresa" />
      <h1>mi barra de navegacion</h1>
      <div className="categories">
        <NavLink to={`/category/pasteleria`}>Pasteleria</NavLink>
        <NavLink to={`/category/cafe`}>Cafe</NavLink>
        <NavLink to={`/category/salado`}>Salado</NavLink>
        <NavLink to={`/category/facturas`}>Facturas</NavLink>
      </div>
        <CartWidget />
      </nav>  
    );
}

export default NavBar