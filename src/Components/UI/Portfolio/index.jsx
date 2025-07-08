import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';
import Img from './img/versatility.jpg';

export default class Portfolio extends Component {
  render() {
    return (
      <section className={"portfolio__section--width section--padding portfolio__section--height"}>
        <p>For Android debugging purposes have created <a  className='porfolio__a--color' href='https://chrome.google.com/webstore/search/rafalthedeveloper' >Chrome extension</a>
        </p>
        <p>Here you can find here some of my websites I have been working on...</p>
        <ul>
          {JsonMenu[2].menuText.map(el => (
            <div>
            <a href={el.href}>{el.href}</a> 
            <p>{el.tech}</p>
            </div>
          ))}
          
        </ul>
      </section>
    )
  }
}