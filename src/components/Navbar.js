import React from 'react';
import './style/NavBarStyle.css'
import { Link } from 'react-router-dom'
 const Navbar = ()=>{ console.log("navbar rendered");
    return(
            
            <nav className = "nav-wrapper">
                <ul className = "nav-links">
                    <li className = "list-item"><Link to="/" className ="link">Shop</Link></li>
                    <li className = "list-item"><Link to="/cart" className ="link">My cart</Link></li>
                    <li className = "list-item"><Link to="#" className ="link">Logout</Link></li>
                </ul>
            </nav>
    )  
}

export default Navbar;