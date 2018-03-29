import React from 'react';
import { getDomainApiUrl, source } from '../conf/Conf';

const API = source.home;

class Portfolio extends React.Component {
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
        <div className="row small-up-1 medium-up-2 align-center">
          {
            items.map(item =>
              <div key={item.nid[0].value} className="column">
                {/*
                  Getting this error: Warning: Expected `onTouchStart` listener to be a function, instead got a value of `string` type.
                  * Resolved following the recommendation here: https://stackoverflow.com/a/44833743
                  Quote: 
                    The problem: invoking the function immediately and then what's left is the return value, which might not be a function!
                    Solution wrap that function call inside an arrow function: onClick={() => this.props.addCharacterById(character.id)}
                */}
                <div className="flip-card card" onTouchStart={() => "this.classList.toggle('hover');"}>
                  <div className="flip-card-inner">
                    <div className="flip-card-inner-front" style={{backgroundImage: `url(${item.field_image[0].url})`}}>
                      <span>{ item.title[0].value }</span>
                    </div>
                    <div className="flip-card-inner-back">
                      <h3 className="flip-card-inner-back-title">{ item.title[0].value }</h3>
                      <p className="flip-card-inner-back-text" dangerouslySetInnerHTML={{__html: item.body[0].value}}></p>
                      <a href={ item.field_url[0].value ? item.field_url[0].value : "/" } className="button success">Visit { item.title[0].value }'s web site</a>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Portfolio;