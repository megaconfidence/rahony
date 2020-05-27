import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Lodge from './routes/Lodge';
import Service from './routes/Service';
import NotFound from './routes/Notfound';
import Slidein from './components/Slidein';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Slidein />
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
