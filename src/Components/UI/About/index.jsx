import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';
import Img from './img/versatility.jpg';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <img src={Img} className={'img-responsive'} />
        <h4 dangerouslySetInnerHTML={{__html: JsonMenu[1].menuTitle}}></h4>
        <p dangerouslySetInnerHTML={{ __html: JsonMenu[1].menuText }}></p>
      </section>
    )
  }
}