import React from 'react';
import { getDomainApiUrl, source, paths } from '../conf/Conf';

const API = source.home;

class Home extends React.Component {
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
      <div className="masonry-css">
        {
          items.map(item =>
            <div key={item.nid[0].value} className="masonry-css-item">
              <div className="callout">
                <div className="callout__img-container front"><img className="callout__img-container__img" src={ item.field_image[0].url } alt={ item.field_image[0].alt } /></div>
                <a href={paths.portfolio}><h1>{ item.title[0].value }</h1></a>
                <div className="callout__body" dangerouslySetInnerHTML={{__html: item.field_brand_info[0].value}}/>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default Home;