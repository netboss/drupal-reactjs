import React, { Component } from 'react';
import { getPlaceholderImg, getApiSource } from '../conf/Conf';

const API = getApiSource('home');

class Home extends Component {
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
    var imgPlaceholder = getPlaceholderImg();
    return (
      <div>
        <h1 className="page-heading">Companies & Brands</h1>
        <div className="masonry-css">
          {
            items.map(item =>
              <div key={ item.nid[0] !== undefined ? item.nid[0].value : 'key-' + Math.random() } className="masonry-css-item">
                <div className="callout">
                  {/*{photo.caption !== null ? photo.caption.text : ''}*/}
                  {/*<div className="callout__img-container front"><img className="callout__img-container__img" src={ item.field_image[0].url } alt={ item.field_image[0].alt } /></div>*/}
                  <div className="callout__img-container front">
                    <img className="callout__img-container__img" src={ item.field_image[0] !== undefined ? item.field_image[0].url : imgPlaceholder } alt={ item.field_image[0] !== undefined ? item.field_image[0].url : imgPlaceholder } height="" width="" />
                  </div>
                  <a href="/#/portfolio"><h1>{ item.title[0] !== undefined ? item.title[0].value : 'Company' }</h1></a>
                  <div className="callout__body" dangerouslySetInnerHTML={ { __html: item.field_brand_info[0] !== undefined ? item.field_brand_info[0].value : 'Content' } }/>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Home;