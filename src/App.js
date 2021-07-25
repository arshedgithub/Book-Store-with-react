import './App.css';
import Home from './components/pages/home';
import Footer from './components/footer';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/notFound';
import Contact from './components/pages/contact';
import About from './components/pages/about';
import Books from './components/pages/books';
import SignIn from './components/pages/signIn';

function App() {
  return (
    <React.Fragment>
      {/* <main className='container w-100'> */}
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/signin" component={SignIn} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from='/' exact to='/home' />
        <Redirect to='/not-found' />
      </Switch>
      {/* </main> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
