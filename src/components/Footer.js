import React from 'react';
import {getDomainApiUrl} from './conf/Conf';
// Font Awesome
// https://www.npmjs.com/package/react-fontawesome
var FontAwesome = require('react-fontawesome');

const API = getDomainApiUrl() + 'api/reactfooter';

class Footer extends React.Component {
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
            <div key={item.toString()}>
              <footer className="social-footer">
							  <div className="social-footer-left">
                  <h6><div dangerouslySetInnerHTML={{__html: item.body[0].value}}/></h6>
							  </div>
							  <div className="social-footer-icons">
							    <ul className="menu simple">
							      <li>
                      <a href="https://www.linkedin.com/in/ilatorre/">
                        <span className="hidden">LinkedIn</span>
                        {/*<i className="fa fa-pinterest-p" aria-hidden="true"></i>*/}
                        <FontAwesome
                          className="fa fa-linkedin"
                          name="linkedin"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.drupal.org/u/netboss">
                        <span className="hidden">Drupal</span>
                        <FontAwesome
                          className="fab fa-drupal"
                          name="drupal"
                        />
                      </a>
                    </li>
                    {/*
                    <li>
                      <a href="https://www.facebook.com/">
                        <span className="hidden">FB</span>
                        <FontAwesome className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://plus.google.com/u/0/+Iv%C3%A1nLatorre">
                        <span className="hidden">G+</span>
                        <FontAwesome className="fa fa-google-plus" />
                      </a>
                    </li>
							      <li>
                      <a href="https://www.instagram.com/iglatorre/">
                        <span className="hidden">Instagram</span>
                        <FontAwesome className="fa fa-instagram" />
                      </a>
                    </li>
                    */}
							      <li>
                      <a href="https://twitter.com/netboss">
                        <span className="hidden">Twitter</span>
                        {/*<i className="fa fa-twitter" aria-hidden="true"></i>*/}
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


/*
<footer class="social-footer">
  <div class="social-footer-left">
    <a href="#"><img class="logo" src="https://placehold.it/150x30"></a>
  </div>
  <div class="social-footer-icons">
    <ul class="menu simple">
      <li><a href="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
      <li><a href="https://www.instagram.com/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
      <li><a href="https://www.pinterest.com/"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
      <li><a href="https://twitter.com/?lang=en"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
    </ul>
  </div>
</footer>




							<footer className="social-footer">
							  <div className="social-footer-left">
							    <a href="#"><img className="logo" src="https://placehold.it/150x30"></a>
							    <div dangerouslySetInnerHTML={{__html: item.body[0].value}}/>
							  </div>
							  <div className="social-footer-icons">
							    <ul className="menu simple">
							      <li><a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
							      <li><a href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
							      <li><a href="https://www.pinterest.com/"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
							      <li><a href="https://twitter.com/?lang=en"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
							    </ul>
							  </div>
							</footer>




<footer class="marketing-site-footer">
  <div class="row medium-unstack">
    <div class="medium-4 columns">
      <h4 class="marketing-site-footer-name">Yeti Snowcone</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolorem accusantium architecto id quidem, itaque nesciunt quam ducimus atque.</p>
      <ul class="menu marketing-site-footer-menu-social simple">
        <li><a href="#"><i class="fa fa-youtube-square" aria-hidden="true"></i></a></li>
         <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
         <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
      </ul>
    </div>
    <div class="medium-4 columns">
       <h4 class="marketing-site-footer-title">Contact Info</h4>
      <div class="marketing-site-footer-block">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <p>100 W Rincon<br>San Francisco, CA 94015</p>
      </div>
      <div class="marketing-site-footer-block">
        <i class="fa fa-phone" aria-hidden="true"></i>
        <p>1 (800) 555-5555</p>
      </div>
      <div class="marketing-site-footer-block">
        <i class="fa fa-envelope-o" aria-hidden="true"></i>
        <p>yetirules@fakeemail.com</p>
      </div>
    </div>
    <div class="medium-4 columns">
      <h4 class="marketing-site-footer-title">Instagram</h4>
      <div class="row small-up-3">
        <div class="column column-block">
          <img src="https://placehold.it/75" alt="" />
        </div>
        <div class="column column-block">
          <img src="https://placehold.it/75" alt="" />
        </div>
        <div class="column column-block">
          <img src="https://placehold.it/75" alt="" />
        </div>
        <div class="column column-block">
          <img src="https://placehold.it/75" alt="" />
        </div>
        <div class="column column-block">
          <img src="https://placehold.it/75" alt="" />
        </div>
        <div class="column column-block">
          <img src="https://placehold.it/75" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="marketing-site-footer-bottom">
    <div class="row large-unstack align-middle">
      <div class="column">
        <p>&copy; 2017 No rights reserved</p>
      </div>
      <div class="column">
        <ul class="menu marketing-site-footer-bottom-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>




Backup:

				{
          items.map(item =>
            <div key={item.toString()}>
              <div dangerouslySetInnerHTML={{__html: item.body[0].value}}/>
            </div>
          )
        }
*/

