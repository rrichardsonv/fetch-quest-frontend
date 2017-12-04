import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import './App.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/search" component={Search} />
        <Route exact path="/" component={Login}/>
      </div>
    );
  }
}

export default App;
