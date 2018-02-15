import React, { Component } from 'react';
import ListingsHeader from './ListingsHeader';
import ListingsBody from './ListingsBody';

class Listings extends Component {

  render() {
    return (
      <div className='listings'>
        <ListingsHeader />
        <ListingsBody />
      </div>
    )
  }
}

export default Listings;
