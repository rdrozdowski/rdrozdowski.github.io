import React, { Component } from 'react';
import Styles from './Footer.css';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer role="contentinfo" className={"row footer--height footer--shift-left"}>
          <p>All rights reserved &copy;<span id="now">2019</span> Rafal Drozdowski</p>
      </footer>
    )
  }
}