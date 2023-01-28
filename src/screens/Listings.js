import React, { Component } from 'react';
import ListingsHeader from './ListingsHeader';
import ListingsBody from './ListingsBody';
import ListingsFooter from './ListingsFooter';

class Listings extends Component {
  render() {
    return (
      <div className='listings'>
        <ListingsHeader />
        <ListingsBody />
        <ListingsFooter />
      </div>
    );
  }
}

export default Listings;
