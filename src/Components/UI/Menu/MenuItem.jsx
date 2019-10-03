import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Styles from './MenuItem.css';
import '../../../../src/styles.css';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

    /**
   * retrieve clicked elem
   */
    handleClick(e) {
        let i = 0;
        let child;
        this.menuItem = e.target;
        this.base = this.menuItem.parentNode.parentNode;
        this.children = this.base.children;
        this.parent = this.base.parentNode;

        for (i; i<this.children.length; i++) {
            child = this.children[i].children[0];
            child.setAttribute('class', '');
        }

        /**
         * add 'active' class to clicked item
         */    
        if (this.menuItem.hasAttribute('href')) {
            this.menuItem.setAttribute('class', 'active');
        }

        /**
     * close dropdown on link click
     */
        if (this.parent.hasAttribute('class', 'show')) {
            var classes = this.parent.getAttribute('class'),
                patt = /show/g;
            this.parent.setAttribute('class', classes.replace( patt, ''));
        }

    }


    render() {
        return (    
            <li onClick={this.handleClick.bind(this)} className="Menu__ul__items--position"><Link to={this.props.menu} className={Styles.linkClass}>{this.props.menu}</Link></li>
        )
    }
}