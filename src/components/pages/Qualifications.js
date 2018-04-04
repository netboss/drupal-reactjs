import React, { Component } from 'react';
import { getPlaceholderImg, getApiSource } from '../conf/Conf';

const API = getApiSource('qualifications');

class Qualifications extends Component {
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
      <div className="content-container">
        {
          items.map(item =>
            <div key={ item.nid[0] !== undefined ? item.nid[0].value : 'key-' + Math.random() }>
              <div className="content-container__head">
                <h1>{ item.title[0] !== undefined ? item.title[0].value : 'Expertise' }</h1>
              </div>
              <div className="content-container__body">
                <div className="callout__img-container not-front right">
                  <img className="callout__img-container__img" src={ item.field_image[0] !== undefined ? item.field_image[0].url : imgPlaceholder } alt={ item.field_image[0] !== undefined ? item.field_image[0].url : imgPlaceholder } height="" width="" />
                </div>
                <div dangerouslySetInnerHTML={ { __html: item.body[0] !== undefined ? item.body[0].value : 'Content' } }/>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default Qualifications;