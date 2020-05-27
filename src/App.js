import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Lodge from './routes/Lodge';
import Service from './routes/Service';
import NotFound from './routes/Notfound';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />} />
          <Route exact path='/about' render={(props) => <About {...props} />} />
          <Route exact path='/lodge' render={(props) => <Lodge {...props} />} />
          <Route
            exact
            path='/service'
            render={(props) => <Service {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
