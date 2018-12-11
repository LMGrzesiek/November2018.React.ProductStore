import React, { Component } from 'react';

class Product extends Component {

    addToCartOnClick = () => {
        console.log('clicked ' + this.props.e)
    }
   
    render() {
        return (this.props.viewAsGrid ? <div className="item col-4">
                    <div className="thumbnail card">
                        <div className="img-event">
                            <img
                            className="group list-group-image img-fluid"
                            src="http://placehold.it/400x250/000/fff"
                            alt=""
                            />
                        </div>
                        <div className="caption card-body">
                            <h4 className="group card-title inner list-group-item-heading">
                                {this.props.e}
                            </h4>
                            <p className="group inner list-group-item-text">
                            Product description... Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat.
                            </p>
                            <div className="row">
                            <div className="col-12 col-md-6">
                                <p className="lead">$21.000</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <button className="btn btn-success" onClick={this.addToCartOnClick}>Add to cart</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div> : 
                <div className="col-12 card">
                    <div className="row">
                        <div className="col-4">
                            <img
                            className="img-fluid"
                            src="http://placehold.it/400x250/000/fff"
                            alt=""
                            />
                        </div>
                        <div className="col-8">
                            <h2>{this.props.e}</h2>
                            <p>Product description... Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            <div className="row">
                            <div className="col-12 col-md-6">
                                <p>$21.000</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <button className="btn btn-success" onClick={this.addToCartOnClick}>Add to cart</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>);
    }
}

export default Product;