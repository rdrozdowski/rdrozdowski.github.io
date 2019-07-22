import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Footer from './Components/UI/Footer/index';
import Header from './Components/UI/Header/index';
import Home from './Components/UI/Home/index.jsx';
import About from './Components/UI/About/index.jsx';
import Portfolio from './Components/UI/Portfolio/index.jsx';
import Contact from './Components/UI/Contact/index.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (                 
      <Router>
        <div>
          <Header />
          <Redirect from="/" to="/Home" />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    )
  }
}