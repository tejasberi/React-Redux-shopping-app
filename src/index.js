import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ItemListReducer from './store/Item-list.reducer';
import CartItemReducer from './store/Cart-item.reducer';

const rootReducer = combineReducers({
    ItemListReducer: ItemListReducer,
    CartItemReducer: CartItemReducer
});

const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension(): f => f
);

const store = createStore(rootReducer, enhancers);

store.dispatch((dispatch) => {
    dispatch({ type: 'FETCH_ITEMDATA_START' });
    axios.get('./products.json')
        .then((res) => {
            dispatch({ type: 'FETCH_ITEMDATA_SUCCESS', payload: res.data });
        }).catch((err) => {
            dispatch({ type: 'FETCH_ITEMDATA_ERROR', payload: err });
        })
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
