

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Add-to-cart-btn.css';

class AddToCartBtn extends Component {

    addToCart() {
        const itemTitle = this.props.product.title;
        const count = this.props.count;
        let productExists;
        if (this.props.cartItems.products.length === 0) {
            this.props.addToCart(this.props.product, count)
        } else {
            this.props.cartItems.products.forEach((item) => {
                productExists = this.props.cartItems.products.find((item) => itemTitle === item.product.title)
            });
            productExists ? this.props.incrementCartCount(count, itemTitle) : this.props.addToCart(this.props.product, count);
        }
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <span className="add-to-cart-btn">
                <button type="button" class="add-btn btn" onClick={this.addToCart.bind(this)}>ADD TO CART</button>
            </span>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        products: store.ItemListReducer,
        cartItems: store.CartItemReducer
    }
};

const mapDispatchToStore = (dispatch) => {
    return {
        addToCart: (product, count) => {
            dispatch({ type: 'ADD_TO_CART', payload: { product: product, count: Number(count) } });
        },
        incrementCartCount: (count, title) => {
            dispatch({ type: 'INCREMENT_CART', payload: { title: title, count: Number(count) } });
        }
    }
}

export default connect(mapStoreToProps, mapDispatchToStore)(AddToCartBtn);
