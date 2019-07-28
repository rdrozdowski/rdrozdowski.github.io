import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Skeleton from './Components/UI/Skeleton/index.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {  
    return (
      <Skeleton />
    )
  }
}