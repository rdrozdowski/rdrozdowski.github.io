import React, { Component } from 'react';
import Styles from './Footer.css';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer role="contentinfo" className={'row'}>
        <div className={'col-md-2 col-lg-2'}></div>
        <div className={'col-md-8 col-lg-8'}>
          <p>All rights reserved ©  <span id="now">2019</span> Rafal Drozdowski</p>
        </div>
        <div className={'col-md-2 col-lg-2'}></div>
      </footer>
    )
  }
}