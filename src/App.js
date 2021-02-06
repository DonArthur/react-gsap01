import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import './App.scss';
import Second from './pages/Second'
import Third from './pages/Third'

function App() {
  return (
    <Router>
      <header>
        <div>
          <nav className="navbar">
            <ul>
              <li>
                <Link className="navbar-text" to="/">Home</Link>
              </li>
              <li>
                <Link className="navbar-text" to="/second-tutorial">Second Tutorial</Link>
              </li>
              <li>
                <Link className="navbar-text" to="/third-tutorial">Third Tutorial</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/third-tutorial">
              <Third />
            </Route>
            <Route path="/second-tutorial">
              <Second />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </header>
    </Router>
  );
}

export default App;
