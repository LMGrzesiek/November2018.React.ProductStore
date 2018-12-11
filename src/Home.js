import React, { Component } from 'react';

import Product from './Product';

class Home extends Component {
    constructor() {
        super();

        this.state = {
         viewAsGrid: true,
         products: []
        }
    }

    toggleViewOnClick = () => {
        this.setState(state => {return {viewAsGrid: !this.state.viewAsGrid}});
    }

    componentDidMount(){
        fetch("./products.json").then((response) => {
            response.json().then((data) =>{
                this.setState(state => {return {products: data }});
            })
        })
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
                        <div id="products" className="row">
            {this.state.products.map(
                    e => <Product e={e} addToCart={this.addToCart} key={e.ID} viewAsGrid={this.state.viewAsGrid}></Product>
            )}
            </div>
        </div>
        
    );
  }
}

export default Home;