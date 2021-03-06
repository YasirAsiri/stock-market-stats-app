import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav.js';
import Home from './Home.js';
import Footer from './Footer.js';
import '../styles/bootstrap.min.css';
import '../styles/styles.css';
import History from './History.js';
import Stock from './Stock.js';
import Handler404 from './Handler404.js';





function App() {
  return (
    <Router>
      <div className="App">
        < Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/stock' exact component={Stock} />
          <Route path='/history' exact component={History} />
          <Route path='*' exact component={Handler404} />

        </Switch>
        < Footer />
      </div>
    </Router>
  );
}

export default App;
