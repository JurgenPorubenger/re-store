import React from "react";
import {Link} from 'react-router-dom'
import './shop-header.css'

const ShopHeader = ({numItems, total}) => {
    return (
        <header>
            <Link to="/" className="logo text-dark" href="#">ReStore </Link>
            <div>
                <i className="cart-icon fa fa-shopping-cart" />
                <Link to="/cart" className="shopping-cart" href="#">
                        {numItems} items (${total})
                </Link>
            </div>
        </header>
    )
}

export default ShopHeader
