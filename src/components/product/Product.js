import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import AddToCartBtn from '../add-to-cart-btn/Add-to-cart-btn';
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            count: 1
        };
    }

    updateCount(event) {
        this.setState({ count: event.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="Product row">
                    <div className="col-8">
                        <img src={`../media/${this.props.products.products[this.state.id].image}`} alt={this.props.products.products[this.state.id].title} />
                    </div>
                    <div className="col-4 info">
                        <p className="brand">{this.props.products.products[this.state.id].brand}</p>
                        <p className="title">{this.props.products.products[this.state.id].title}</p>
                        <CurrencyFormat value={this.props.products.products[this.state.id].price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <p className="price">{value}</p>} />
                        <p className="description">{this.props.products.products[this.state.id].description}</p>
                        <input type="number" name="quantity" min="1" max="100" class="form-control" defaultValue={this.state.count} onChange={this.updateCount.bind(this)} />
                        <AddToCartBtn count={this.state.count} product={this.props.products.products[this.state.id]}/>
                        {/*<button type="button" class="add-btn btn" onClick={this.addToCart.bind(this)}>ADD TO CART</button>*/}
                    </div>
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

export default connect(mapStoreToProps, null)(Product);
