import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import NavBar from "./NavBar";
import Cart from "./Cart";
import Register from "./Register";
import Login from "./Login";
import FinanceSearch from "./FinanceSearch";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cart: []
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="row">
          <div className="col-12 my-3" />
        </div>
        <div className="container">
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/financesearch" component={FinanceSearch} />
            <Route
              path="/about"
              render={() => (
                <div className="jumbotron">
                  <h1>About</h1>
                  <p>
                    This React Store is developed for the November 2018 DotNet
                    class.
                  </p>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
