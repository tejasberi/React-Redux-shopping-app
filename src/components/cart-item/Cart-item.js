import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
import { connect } from 'react-redux';
import './Cart-item.css';

class CartItem extends Component {

    state = {
        data: this.props,
        imageWidth: this.props.small ? 'col-4' : 'col-2'
    };

    updateCount(event) {
        this.props.modifyCount(event.target.value, this.props.item.product.title);
    }

    deleteItem() {
        this.props.deleteItem(this.props.item.product.title);
    }

    render() {
        return (
            <div>
                {this.props.item ? <div className="cart-item row">
                    <div className={`img-wrap col-2 ${this.state.imageWidth}`}>
                        <img src={`./media/${this.props.item.product.image}`} alt={this.props.item.product.title} />
                    </div>
                    <div className="col-6">
                        <p className="brand">{this.props.item.product.brand}</p>
                        <p className="title">{this.props.item.product.title}</p>
                        <CurrencyFormat value={this.props.item.product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <p className="price">{value}</p>} />
                    </div>
                    {!this.props.small ? <div className="col-2 input-wrap">
                        <input type="number" name="quantity" min="1" max="100" className="form-control" defaultValue={this.props.item.count} onChange={this.updateCount.bind(this)} />
                    </div> : null}
                    <div className="col-1 price-wrap">
                        <CurrencyFormat value={this.props.item.product.price * this.props.item.count} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <p className="price">{value}</p>} />
                    </div>
                    <div className="col-1 action-wrap">
                        <button type="button" className="close" aria-label="Close" onClick={this.deleteItem.bind(this)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div> : null}
            </div>
        );
    }
}

const mapDispatchToStore = (dispatch) => {
    return {
        modifyCount: (count, title) => {
            dispatch({ type: 'MODIFY_CART', payload: { title: title, count: Number(count) } });
        },
        deleteItem: (title) => {
            dispatch({ type: 'DELETE_FROM_CART', payload: { title: title } });
        }
    }
}

export default connect(null, mapDispatchToStore)(CartItem);
