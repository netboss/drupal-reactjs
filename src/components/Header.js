import React from 'react';
import NavLink from './NavLink';
import { getDomainApiUrl, source } from '../components/conf/Conf';

const API = getDomainApiUrl() + 'api/reactmenu';

class Menu extends React.Component {
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
            <a href="/">
              <img src="http://ilatorre.drupal.test/sites/ilatorre.drupal.test/files/logo/white_logo_transparent.png" alt="ILatorre.me" />
            </a>
            {/*<a className="topbar-responsive-logo" href="/"><strong>&lt;il /&gt;</strong></a>*/}
          </div>
          <div id="topbar-responsive" className="topbar-responsive-links">
            <div className="top-bar-right">
              <ul className="menu simple vertical medium-horizontal">
                {
                  items.map(item =>
                    <li key={item.uuid[0].value}><NavLink to={item.path[0].alias}>{item.name[0].value}</NavLink></li>
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