import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import HelloWorld from './components/hello-world';
import Home from './Home'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Home />;
  }
}

export default hot(module)(App);
