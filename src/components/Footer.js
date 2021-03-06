import React, { Component } from 'react';
import { getApiSource } from './conf/Conf';
// Font Awesome
// https://www.npmjs.com/package/react-fontawesome
var FontAwesome = require('react-fontawesome');

const API = getApiSource('reactfooter');

class Footer extends Component {
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
        {
          items.map(item =>
            <div key={ item.uuid[0] !== undefined ? item.uuid[0].value : 'key-' + Math.random() }>
              <footer className="social-footer">
							  <div className="social-footer-left">
                  <h6><div dangerouslySetInnerHTML={{__html: item.body[0].value}}/></h6>
							  </div>
							  <div className="social-footer-icons">
							    <ul className="menu simple">
							      <li>
                      <a href="https://www.linkedin.com/in/ilatorre/" target="_blank" rel="noopener noreferrer">
                        <span className="hidden">LinkedIn</span>
                        <FontAwesome
                          className="fa fa-linkedin"
                          name="linkedin"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.drupal.org/u/netboss" target="_blank" rel="noopener noreferrer">
                        <span className="hidden">Drupal</span>
                        <FontAwesome
                          className="fab fa-drupal"
                          name="drupal"
                        />
                      </a>
                    </li>
							      <li>
                      <a href="https://twitter.com/netboss" target="_blank" rel="noopener noreferrer">
                        <span className="hidden">Twitter</span>
                        <FontAwesome
                          className="fa fa-twitter"
                          name="twitter"
                        />
                      </a>
                    </li>
							    </ul>
							  </div>
							</footer>
            </div>
          )
        }
      </div>
    );
  }
}

export default Footer;
