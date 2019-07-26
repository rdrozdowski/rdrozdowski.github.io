import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Footer from '../Footer/index';
import Header from '../Header/index';
import Home from '../Home/index.jsx';
import About from '../About/index.jsx';
import Portfolio from '../Portfolio/index.jsx';
import Contact from '../Contact/index.jsx';
import Menu from '../Menu/index';
import MenuItem from '../Menu/MenuItem.jsx';
import JsonMenu from '../Menu/Menu.json';


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
          <Header />
        <div className="row">
          <div className="col">

            {
              this.JsonMenu.map((item, index) => {
                return (
                  <MenuItem key={index} menu={item.menuTitle} className={"nav-link"} />
                )
              })
            }

          </div>
          <div className="col">
          <Router>
        <div>

          <Redirect from="/" to="/Home" />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
          </div>
        </div>

      </div>



    )
  }
}
export default Skeleton;
