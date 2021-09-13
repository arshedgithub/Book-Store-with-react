import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Contact from "./pages/contact";
import About from "./pages/about";
import Books from "./pages/books";
import SignIn from "./pages/signIn";
import Footer from "./components/footer";
import "./App.css";
import Cart from "./pages/cart";

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
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
