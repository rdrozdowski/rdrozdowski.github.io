import React, { Component } from 'react';
import Styles from './Footer.css';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer role="contentinfo" className={"row footer--height footer--shift-left"}>
          <p>&copy; <span className='footer-name'>Rafal Drozdowski</span> <span id="now">{new Date().getFullYear()}</span></p>
      </footer>
    )
  }
}