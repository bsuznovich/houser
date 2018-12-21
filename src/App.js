import React, { Component } from 'react';
import './App.css';
// import Dashboard from './components/Dashboard/Dashboard'
// import Wizard from './components/Wizard/Wizard'
import Header from './components/Header/Header'
import routes from './routes'
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Link to='/'></Link>
          <Link to='/wizard'></Link>
        </div>
        {routes}
      </div>
    );
  }
}

export default App;
