import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className="row no-gutters">
          <h4 dangerouslySetInnerHTML={{ __html: JsonMenu[0].menuTitle }}></h4>
            <p dangerouslySetInnerHTML={{ __html: JsonMenu[0].menuText }}></p>
        </div>
      </section>
    )
  }
}