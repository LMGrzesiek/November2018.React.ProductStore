import React, { Component } from 'react';

import {Switch, Route} from 'react-router-dom'

import Home from './Home';
import NavBar from './NavBar';
import Cart from './Cart';

class App extends Component {

  constructor(){
    super();

    this.state = {
      cart: []
    }
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="row">
            <div className="col-12 my-3">
            </div>
        </div>
        <div className="container">
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/" exact component={Home} />
            <Route path="/about" render={() => (<div className="jumbotron"><h1>About</h1><p>This React Store is developed for the November 2018 DotNet class.</p></div>)} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;