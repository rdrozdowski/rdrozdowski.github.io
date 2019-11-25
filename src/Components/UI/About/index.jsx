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
        <p dangerouslySetInnerHTML={{ __html: JsonMenu[1].menuText }}></p>
      </section>
    )
  }
}