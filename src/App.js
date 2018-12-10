import React, { Component } from 'react';

import Product from './Product';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container">
          <div className="row">
            <div className="col-12 my-3">
            </div>
          </div>
          <div id="products" className="row view-group">
            {[0, 1, 2, 3, 4, 5].map(
              e => <Product></Product>
            )}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
