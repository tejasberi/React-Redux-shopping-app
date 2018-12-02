import React, { Component } from 'react';
import './ItemList.css';
import Item from "../item/Item";

class ItemList extends Component {

    state = {
        count : 1
    }

    render() {
        return (
            <div className="container">
                <div className="row list-wrap">{this.props.products.map((product, index) =>
                    <Item product={product} index={index} count={this.state.count}/>
                )}</div>
            </div>
        )
    }
}

export default ItemList;
