import React, { Component } from 'react';

import { connect } from 'react-redux'
import { removeFromCart } from './actions';

class Cart extends Component {
    render() {
        return (<table className="table table-striped">
        <thead>
            <tr>
                <th>Item</th>
                <th>Description</th>
                <th>Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {this.props.cart.map(e => <tr>
                <td>{e.Name}</td>
                <td>{e.Description}</td>
                <td>{e.Price}</td>
                <td><button onClick={() => this.props.removeFromCart(e)} className="btn btn-danger">Remove</button></td>
            </tr>)}
            </tbody></table>);
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeFromCart: (product) => {
          dispatch(removeFromCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
