import React, { Component } from 'react';
import NavLink from './NavLink';
import { getApiSource, getLogo } from '../components/conf/Conf';

const API = getApiSource('reactmenu');
const logo = getLogo();

class Menu extends Component {
  state = {
    items: [],
  }
  async componentDidMount() {
    const res = await fetch(API);
    const data = await res.json();
    this.setState({ items: data });
  }
  render() {
    const { items } = this.state || [];
    return (
      <div>
        <nav className="top-bar logo topbar-responsive">
          <div className="top-bar-title">
            <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
              {/* Fixed the problem with the "data-toggle" default: https://stackoverflow.com/a/43552977 */}
              <button className="menu-icon" type="button" data-toggle=""></button>
            </span>
            <a href="/#/home">
              <img className="logo" src={ logo } alt="iLatorre.me" />
            </a>
            {/*<a className="topbar-responsive-logo" href="/"><strong>&lt;il /&gt;</strong></a>*/}
          </div>
          <div id="topbar-responsive" className="topbar-responsive-links">
            <div className="top-bar-right">
              <ul className="menu simple vertical medium-horizontal">
                {
                  items.map(item =>
                    <li key={ item.uuid[0] !== undefined ? item.uuid[0].value : 'key-' + Math.random() }>
                      <NavLink to={ item.path[0] !== undefined ? item.path[0].alias : '/#/home' }>
                        { item.name[0] !== undefined ? item.name[0].value : 'Home' }
                      </NavLink>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;