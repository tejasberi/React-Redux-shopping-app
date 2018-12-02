import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import './Navigation.css';
import Logo from "../../media/logo.png";
import CartWindow from '../cart-window/Cart-window';

class Navigation extends Component {

    state = {
        count: 0,
        openCartWindow: false
    }

    componentDidMount() {
        this.getCount()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cartItems !== this.props.cartItems) {
            this.getCount();
        }
    }

    getCount() {
        let count1 = 0;
        const prevCount = this.state.count;
        if (this.props.cartItems.products.length > 0) {
            this.props.cartItems.products.map((product) => {
                count1 = count1 + product.count;
            })
        }
        this.setState({ count: count1 }, () => {
            this.state.count > 0 && this.state.count > prevCount && window.location.href.indexOf('cart') === -1
                ? this.setState({ openCartWindow: true }) : this.setState({ openCartWindow: false });
        });

    }

    navigateToCart() {
        this.closeCartWindow();
        this.props.history.push(`/cart`);
    }

    closeCartWindow() {
        this.setState({ openCartWindow: false });
    }

    render() {
        return (
            <div className="navigation row">
                <img src={Logo} className="col-2 logo" />
                <div className="col-8 items">
                    <ul>
                        <li><Link to={`/`}>HOME</Link></li>
                        <li>SHOP</li>
                        <li>JOURNAL</li>
                        <li>MORE</li>
                    </ul>
                </div>
                <div className="col-2 cart-link">
                    <p><Link to={`/cart`}>MY CART(<span>{this.state.count}</span>)</Link></p>
                    {this.state.openCartWindow ? <div className="cart-window-wrap">
                        <CartWindow products={this.props.cartItems.products} />
                        <button className="btn view-cart" onClick={this.navigateToCart.bind(this)}>VIEW CART</button>
                        <button className="btn close-preview" onClick={this.closeCartWindow.bind(this)}>CLOSE PREVIEW</button>
                    </div> : null}
                </div>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        products: store.ItemListReducer,
        cartItems: store.CartItemReducer
    }
};

export default withRouter(connect(mapStoreToProps)(Navigation));
