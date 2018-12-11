import React, { Component } from 'react';

import Product from './Product';

class Home extends Component {
    constructor() {
        super();

        this.state = {
         viewAsGrid: true
        }
    }

    toggleViewOnClick = () => {
        console.log(this.state);
        this.setState(state => {return {viewAsGrid: !this.state.viewAsGrid}});
    }

  render() {
    return (
        <div>
            <div className="row">
                <div className="btn-group">
                    {
                        this.state.viewAsGrid ? 
                        <button className="btn btn-primary" onClick={this.toggleViewOnClick}> List View</button> :
                        <button className="btn btn-primary" disabled> List View</button>
                    }
                    {
                        this.state.viewAsGrid ? 
                        <button className="btn btn-secondary" disabled> Grid View</button> : 
                        <button className="btn btn-secondary" onClick={this.toggleViewOnClick} > Grid View</button>
                    }
                </div>
            </div>
                        <div id="products" className="row view-group">
            {["Hot Dog", "Ice Cream", "Root Beer", "Cold Beer", "French Fries", "Onion Rings"].map(
                    e => <Product e={e} addToCart={this.addToCart} key={e} viewAsGrid={this.state.viewAsGrid}></Product>
            )}
            </div>
        </div>
        
    );
  }
}

export default Home;