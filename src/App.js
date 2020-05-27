import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Lodge from './routes/Lodge';
import NotFound from './routes/Notfound';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './routes/Contact';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />} />
          <Route exact path='/about' render={(props) => <About {...props} />} />
          <Route exact path='/lodge' render={(props) => <Lodge {...props} />} />
          <Route exact path='/contact' render={(props) => <Contact {...props} />} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
