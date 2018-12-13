import React, { Component } from 'react';
import { connect } from 'react-redux'
class Login extends Component {
    loginOnSubmit = (event) => {
        event.preventDefault();
        //Since Redux 6 breaks react-redux-firebase right now, I'll just fall back to using window.firebase
        window.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

    }

    render() {
        return (this.props.user ? <div className="alert alert-info">You are logged in</div> :
            <form onSubmit={this.loginOnSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control" required onChange={(event) => this.setState({email: event.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" required onChange={(event) => this.setState({password: event.target.value })} />
                </div>
                <input type="submit" value="log in" className="btn btn-block" />
            </form>
            );
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer 
  }
}


export default
    connect(mapStateToProps)(Login)

