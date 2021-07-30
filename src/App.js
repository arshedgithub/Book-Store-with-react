import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home';
import NotFound from './components/pages/notFound';
import Contact from './components/pages/contact';
import About from './components/pages/about';
import Books from './components/pages/books';
import SignIn from './components/pages/signIn';
import Footer from './components/footer';
import './App.css';
import Cart from './components/pages/cart';

function App() {
  return (
    <React.Fragment>
      <div className="main ">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route path="/signin" component={SignIn} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from='/' exact to='/home' />
          <Redirect to='/not-found' />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
