import React, { Component } from 'react';
import Styles from './Header.scss';
import Logo from '../../../../img/name.png';
import Stripes from '../../../../img/3stripes.png';
import Menu from '../Menu/Menu.jsx';


export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'row'}>
        <div className={'col-sm-1 col-md-1 col-md-1 col-lg-1'}>&nbsp;</div>
        <Menu className={'col-sm-10 col-md-10 col-lg-10'} />
        <div className={'col-sm-1 col-md-1 col-lg-1'}>&nbsp;</div>
      </div>
    )
  }
}