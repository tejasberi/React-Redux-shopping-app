import React, { Component } from 'react';
import CartItem from '../cart-item/Cart-item';
import './Cart-window.css';

class CartWindow extends Component {
    render() {
        return (
            <div className="cart-window">
                {this.props.products && this.props.products.length > 0 ? this.props.products.map((item) =>
                    <CartItem item={item} small={true}/>): null}
            </div>
        );
    }
}

export default CartWindow;
