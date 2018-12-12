import React, { Component } from 'react';
import { connect } from 'react-redux'

import {NavLink} from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">React Store</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart"><i className="fas fa-shopping-cart"></i><span className="badge badge-secondary">{this.props.cart.length}</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            {!this.props.user ? 
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">Register</NavLink>
              </li> : ""}
            {!this.props.user ? 
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Log In</NavLink>
              </li>
              :
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={() => window.firebase.auth().signOut()}>Log Out</button>
              </li>
            }
          </ul>
        </div>
      </nav>);
    }
}


const mapStateToProps = (state) => {
  return {
   cart: state.cartReducer,
   user: state.userReducer 
  }
}

export default connect(mapStateToProps)(NavBar);