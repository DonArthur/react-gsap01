import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Second from './pages/Second'

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
            </ul>
          </nav>
          <Switch>
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
