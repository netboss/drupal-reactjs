import React from 'react';
import { source } from '../conf/Conf';

const API = source.objectives;

class Objectives extends React.Component {
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
      <div className="content-container">
        {
          items.map(item =>
            <div key={item.nid[0].value} className="content-container__head">
              <h1>{ item.title[0].value }</h1>
              <div className="content-container__body">
                {/*<h1>{ item.title[0].value }</h1>*/}
                <div className="callout__img-container not-front right"><img className="callout__img-container__img" src={ item.field_image[0].url } alt={ item.field_image[0].alt } /></div>
                <div dangerouslySetInnerHTML={{__html: item.body[0].value}}/>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default Objectives;