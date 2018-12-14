import React, { Component } from "react";

const API = "https://api.iextrading.com/1.0/stock/market/list/mostactive ";
const DEFAULT_QUERY = "redux";

class FinanceSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      watchlist: []
    };
  }

  addToWatchlist = symbol => {
    let userId = window.firebase.auth().O;
    if (userId && userId.length > 0) {
      let ref = userId + "/watchlist";
      window.firebase
        .database()
        .ref(ref)
        .once("value", snapshot => {
          let watchlist = snapshot.val() || [];
          if (watchlist.indexOf(symbol) === -1) {
            watchlist.push(symbol);
          }
          window.firebase
            .database()
            .ref(ref)
            .set(watchlist);
        });
    }
  };

  render() {
    const { hits } = this.state;

    return (
      <div>
        <h3>
          <i class="far fa-eye" /> Watchlist
        </h3>
        <ul>
          {this.state.watchlist.map(symbol => (
            <li>{symbol}</li>
          ))}
        </ul>
        {/* <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Current</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {this.state.watchlist.map(symbol => (
              <tr>
                <td>
                  <h6>{symbol.companyName}</h6>
                </td>
                <td>{hit.symbol}</td>
                <td>{hit.latestPrice.toFixed(2)}</td>
                <td>{(hit.latestPrice - hit.open).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <h3>Trending Companies</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Current</th>
              <th>Range</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {this.state.hits.map(hit => (
              <tr>
                <td>
                  <h6>
                    {hit.companyName}{" "}
                    <button
                      className="watchlist btn"
                      onClick={() => this.addToWatchlist(hit.symbol)}
                    >
                      <i class="far fa-eye" />
                    </button>
                  </h6>
                </td>
                <td>{hit.symbol}</td>
                <td>{hit.open}</td>
                <td>{hit.high.toFixed(2)}</td>
                <td>{hit.low.toFixed(2)}</td>
                <td>{hit.latestPrice.toFixed(2)}</td>
                <td>{(hit.high - hit.low).toFixed(2)}</td>
                <td>{(hit.latestPrice - hit.open).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));

    window.setTimeout(() => {
      let userId = window.firebase.auth().O;
      if (userId && userId.length > 0) {
        let ref = userId + "/watchlist";
        window.firebase
          .database()
          .ref(ref)
          .once("value", snapshot => {
            let watchlist = snapshot.val() || [];
            this.setState({ watchlist, watchlistLoading: false });
          });
      }
    }, 1000);
  }
}

export default FinanceSearch;
