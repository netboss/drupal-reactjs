import React from 'react';
import NavLink from './NavLink';
import {getDomainApiUrl} from '../components/conf/Conf';


//const API = 'http://ilatorre.drupal.test/api/reactmenu';
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

/*
1.
<header class="portfolio-hero-header">
  <img class="portfolio-hero-header-logo" src="https://placehold.it/200"/>
  <h1 class="portfolio-hero-header-h1">My Portfolio</h1>
  <ul class="portfolio-hero-header-description">
    <li>Portfolio Example</li>
    <li>Super Clean</li>
    <li>Super Simple</li>
  </ul>
  <ul class="portfolio-hero-header-menu">
    <li><a class="button primary" href="#">Link 1</a></li>
    <li><a class="button primary" href="#">Link 2</a></li>
    <li><a class="button primary" href="#">Link 3</a></li>
  </ul>
</header>

        <header className="portfolio-hero-header">
          <img className="portfolio-hero-header-logo" src="https://placehold.it/200"/>
          <h1 className="portfolio-hero-header-h1">My Portfolio</h1>
          <ul className="portfolio-hero-header-description">
            <li>Portfolio Example</li>
            <li>Super Clean</li>
            <li>Super Simple</li>
          </ul>
          <ul className="portfolio-hero-header-menu">
          {
            items.map(item =>
              <li key={item.uuid[0].value}><NavLink to={item.path[0].alias}>{item.name[0].value}</NavLink></li>
            )
          }
          </ul>
        </header>

2.
<nav class="top-bar topbar-responsive">
  <div class="top-bar-title">
    <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
      <button class="menu-icon" type="button" data-toggle></button>
    </span>
    <a class="topbar-responsive-logo" href="#"><strong>Site Title</strong></a>
  </div>
  <div id="topbar-responsive" class="topbar-responsive-links">
    <div class="top-bar-right">
      <ul class="menu simple vertical medium-horizontal">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Works</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
        <li>
          <button type="button" class="button hollow topbar-responsive-button">Categories</button>
        </li>
      </ul>
    </div>
  </div>
</nav>



Backup:
        <ul className="menu">
          {
            items.map(item =>
              <li key={item.uuid[0].value}><NavLink to={item.path[0].alias}>{item.name[0].value}</NavLink></li>
            )
          }
        </ul>
*/