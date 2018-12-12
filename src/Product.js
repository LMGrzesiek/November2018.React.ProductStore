import React, { Component } from 'react';

import { connect } from 'react-redux'
import { addToCart } from './actions';


class Product extends Component {

    render() {
        return (this.props.viewAsGrid ? <div className="col-4">
                    <div className="card">
                        <img
                            className="card-img-top"
                            src={this.props.e.ImageUrl}
                            alt={this.props.e.Name}
                            />
                        <div className="card-body">
                            <h5 className="card-title">
                                {this.props.e.Name}
                            </h5>
                            <h6 className="card-subtitle text-muted">${this.props.e.Price}</h6>
                            <p className="card-text">
                            {this.props.e.Description}
                            </p>
                            
                        </div>
                        <button className="card-footer btn" onClick={() => this.props.addToCart(this.props.e)}>Add to cart</button>
                    </div>
                </div> : 
                <div className="col-12 card p-2 my-1">
                    <div className="row">
                        <div className="col-4">
                            <img
                            className="img-fluid rounded"
                            src={this.props.e.ImageUrl}
                            alt={this.props.e.Name}
                            />
                        </div>
                        <div className="col-8">
                            <h2>{this.props.e.Name}</h2>
                            <p>{this.props.e.Description}</p>
                            <p>${this.props.e.Price}</p>
                            <button className="btn btn-block" onClick={() => this.props.addToCart(this.props.e)}>Add to cart</button>
                        </div>
                    </div>
                </div>);
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
        addToCart: (product) => {
          dispatch(addToCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
