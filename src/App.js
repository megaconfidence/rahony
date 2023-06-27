import React, { useEffect } from 'react';
import './App.css';
import {
  Route,
  Switch,
  useLocation,
  BrowserRouter as Router,
} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Lodge from './routes/Lodge';
import NotFound from './routes/Notfound';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './routes/Contact';
import Places from './routes/Places';
import Explore from './routes/Explore';
import Booking from './routes/Booking';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const backendURL = process.env.REACT_APP_BACKEND;

  useEffect(() => {
    (async () => {
      await fetch(backendURL);
    })()
    window.scrollTo(0, 0);
  }, [pathname, backendURL]);
  return null;
};

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />} />
          <Route
            exact
            path='/booking'
            render={(props) => <Booking {...props} />}
          />
          <Route exact path='/about' render={(props) => <About {...props} />} />
          <Route exact path='/lodge' render={(props) => <Lodge {...props} />} />
          <Route
            exact
            path='/contact'
            render={(props) => <Contact {...props} />}
          />
          <Route
            exact
            path='/places'
            render={(props) => <Places {...props} />}
          />
          <Route
            exact
            path='/places/:place'
            render={(props) => <Explore {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
