import React, { Component } from 'react';
import MenuItem from './MenuItem.jsx';
import JsonMenu from './Menu.json';
import Logo from '../../../../img/name.png';
import Stripes from '../../../../img/3stripes.png';
import Styles from './Menu.scss';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    {
      this.JsonMenu = JsonMenu
    }

    return (
      <header src={Styles.Stripes}>
      <div className={'row'}>
        <div className={'col-sm-1 col-md-1 col-lg-1'}></div>
        <div className={'col-sm-10 col-md-10 col-lg-10'}>
          <nav className={"navbar navbar-expand-lg navbar-light"}>
          <a className={"navbar-brand"} href="#"><img src={Logo} /></a>
          <button className={"navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={"navbar-toggler-icon"}></span>
          </button>
          <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
            <ul className={"navbar-nav mr-auto"}>
              {
                this.JsonMenu.map((item, index) => {
                  return (
                    <MenuItem key={index} menu={item.menuTitle} className={"nav-link"} />
                  )
                })
              }
            </ul>
          </div>
        </nav>
        </div>
        <div className={'col-sm-1 col-md-1 col-lg-1'}></div>
        </div>
      </header>
    )
  }
}