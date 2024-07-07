import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

//Tip Keep the component and file name same for better recall
const Nav = () => {
    return (
        <div>
            <ul classname="navUL">   
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/profile">user Profile</Link></li>
            </ul>
        </div>
    )
}

export default Nav;
//> Import this on App.js
// -To use imported custom component : <component />