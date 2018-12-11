import React, { Component } from 'react';

import Product from './Product';
import NavBar from './NavBar';

class App extends Component {

  constructor(){
    super();

    this.state = {
      cart: []
    }
  }

  addToCart = (product) => {

    this.setState(state => {return {cart: this.state.cart.concat([product])}});
  }

  render() {
    return (
      <div>
        <NavBar quantity={this.state.cart.length}></NavBar>
        <div className="container">
          <div className="row">
            <div className="col-12 my-3">
            </div>
          </div>
          <div id="products" className="row view-group">
            {["Hot Dog", "Ice Cream", "Root Beer", "Cold Beer", "French Fries", "Onion Rings"].map(
              e => <Product e={e} addToCart={this.addToCart}></Product>
            )}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
