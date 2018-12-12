import React, { Component } from 'react';
import { connect } from 'react-redux'

import Product from './Product';

import {addProducts} from './actions';

class Home extends Component {
    constructor() {
        super();

        this.state = {
         viewAsGrid: true,
        }
    }

    toggleViewOnClick = () => {
        this.setState(state => {return {viewAsGrid: !this.state.viewAsGrid}});
    }

    componentDidMount(){
        if(this.props.products.length === 0){
            fetch("./products.json").then((response) => {
                response.json().then((data) =>{
                    this.props.addProducts(data);
                })
            })
        }
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
            {this.props.products.map(
                    e => <Product e={e} addToCart={this.addToCart} key={e.ID} viewAsGrid={this.state.viewAsGrid}></Product>
            )}
            </div>
        </div>
        
    );
  }
}

const mapStateToProps = (state) => {
    return {
     products: state.productsReducer 
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addProducts: (products) => {
          dispatch(addProducts(products))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);