import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './Main';
import Footer from './components/Footer';
import Drupal from './components/pages/_partials/Drupal';
import Contact from './components/pages/_partials/Contact';

// Fixed issue with jQuery and Zurb Foundation
// http://foundation.zurb.com/forum/posts/49761#comment_39827
// https://stackoverflow.com/a/44056123
import $ from 'jquery';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;
// Fixed issue when trying to run "yarn build"
// https://github.com/zurb/foundation-sites/issues/10987
// Load precompiled JS
require('foundation-sites/dist/js/foundation');

class App extends Component {
  constructor(props) {
    super(props);
    this.hideContactPanel = this.hideContactPanel.bind(this);
  }
  // Hide the contact form after it's submitted
  hideContactPanel() {
    // closes the panel on click outside
    var container = $('#contact-panel');
    container.find('.button, .cancel-button').on('click', function(e) {
      e.preventDefault();
      container.removeClass('is-active').slideDown();
    });
  }
  componentDidMount() {
    // Include the Zurb Foundation JS
    // http://foundation.zurb.com/forum/posts/49761#comment_39827
    $(document).ready(function() {
      $(document).foundation();
    });
    // closes the panel on click outside
    $(document).mouseup(function (e) {
      var container = $('#contact-panel');
      if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
          container.removeClass('is-active');
        }
    });
    // Close top nav panel on mobile
    // menu simple vertical medium-horizontal
    // TODO: needs fine tunning to smooth it out
    $(document).mouseup(function (e) {
      var topNav = $('#topbar-responsive');
      if (!topNav.is(e.target) // if the target of the click isn't the container...
      && topNav.has(e.target).length >= 0) // ... nor a descendant of the container
        {
          // Check if it's a mobile device
          if (window.innerWidth <= 812) { // 812 is the new iPhone X landscape innerWidth
            topNav.slideUp('fast').fadeOut('fast');
          }
        }
    });
    // Hide the contact form after it's submitted
    this.hideContactPanel();
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Drupal />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
