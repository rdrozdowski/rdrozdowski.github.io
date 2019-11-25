import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';
import Img from './img/versatility.jpg';

export default class Portfolio extends Component {
  render() {
    return (
      <section className={"portfolio__section--width section--padding"}>
        <p dangerouslySetInnerHTML={{ __html: JsonMenu[2].menuText }}></p>
      </section>
    )
  }
}