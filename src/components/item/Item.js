import React  from 'react';
import CurrencyFormat from 'react-currency-format';
import AddToCartBtn from '../add-to-cart-btn/Add-to-cart-btn';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
    return (
        <div className="col-4 item">
            <div className="img-wrap">
                <img src={`./media/${props.product.image}`} alt={props.product.title}/>
                <button type="button" class="view-btn btn" to="`/product/${props.product.title}`"><Link to={`/product/${props.index}`}>VIEW DETAILS</Link></button>
                <AddToCartBtn count={props.count} product={props.product}/>
                
            </div>
            <p className="brand">{props.product.brand}</p>
            <p className="title">{props.product.title}</p>
            <CurrencyFormat value={props.product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <p className="price">{value}</p>} />

        </div>
    )
};

export default Item;
