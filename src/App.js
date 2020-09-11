import React, { Component } from 'react';
import Home from './components/Home'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    console.log("App.js render method");
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={this.props.isLoggedIn ? Home : Login}></Route>
            <Route path="/cart" component={this.props.isLoggedIn ? Cart : Login} />
          </Switch>

        </div>
      </BrowserRouter>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}
export default connect(mapStateToProps)(App);
