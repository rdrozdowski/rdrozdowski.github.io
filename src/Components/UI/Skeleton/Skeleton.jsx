import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import Footer from '../Footer/index';
import Header from '../Header/index';
import Home from '../Home/index.jsx';
import About from '../About/index.jsx';
import Portfolio from '../Portfolio/index.jsx';
import Contact from '../Contact/index.jsx';

import MenuItem from '../Menu/MenuItem.jsx';
import JsonMenu from '../Menu/Menu.json';

import '../../../../src/styles.css';


class Skeleton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    {
      this.JsonMenu = JsonMenu;
    }

    return (
      <div>
        <div className="row" >
          <div className="col-md-6 no-gutter Row__col--box-adjust Row__col--box-black Row__col--align--center Row__header--fixed">
            <ul className="Menu__ul">
            {
              this.JsonMenu.map((item, index) => {
                return (
                  <MenuItem key={index} menu={item.menuTitle} className="nav-link" />
                )
              })
            }
            </ul>
          </div>
          <div className="col-md-6 no-gutter Row__col--box-adjust Row__col--box-grey Row__col--padding Row__col--align--left">
            <Switch>
              <div>
                <Redirect from="/" to="/Home" />
                <Route exact path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
              </div>
            </Switch> 
            <Footer />            
          </div>          
        </div>
      </div>
    )
  }
}
export default Skeleton;
