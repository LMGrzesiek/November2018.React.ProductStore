import React, { Component } from 'react';
import { connect } from 'react-redux'
class Register extends Component {
    registerOnSubmit = (event) => {
        event.preventDefault();
        window.firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

    }

    render() {
        return (
            <form onSubmit={this.registerOnSubmit}>
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="text" name="username" className="form-control" required onChange={(event) => this.setState({username: event.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control" required onChange={(event) => this.setState({email: event.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" required onChange={(event) => this.setState({password: event.target.value })} />
                </div>
                <input type="submit" value="register" />
            </form>
            );
    }
}

const mapStateToProps = (state) => {
  return {
  }
}


export default
    connect(mapStateToProps)(Register)

