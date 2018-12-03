import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Category from "./components/category/Category";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";

import Navigation from "./components/navigation/Navigation";
import HomeContainer from "./components/home-container/Home-container";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={Product} />
          <Route path="/category/:id" component={Category} />
      </div>
    );
  }
}

export default App;
