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

        // apply backgorund random color
        let arr = ['35, 129, 156','41, 102, 184', '89, 149, 92', '219, 153, 0', '185, 111, 111'];
        let digitRand = Math.floor( Math.random() * 5);
        let colorCode = `${arr[digitRand]}`;
        let colorCodeLight = "rgba("+colorCode+", 0.3)";
        let colorCodeDark = "rgba("+colorCode+", 1)";
        console.log(colorCodeDark)
        document.body.style.backgroundColor = colorCodeDark;
        //document.getElementsByClassName('Row__col--box-black')[0].style.backgroundColor = colorCodeLight;
        

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