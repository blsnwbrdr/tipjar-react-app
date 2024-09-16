import React from 'react';
import ListingsHeader from './ListingsHeader';
import ListingsBody from './ListingsBody';
import ListingsFooter from './ListingsFooter';

export default function Listings() {
  return (
    <div className='listings'>
      <ListingsHeader />
      <ListingsBody />
      <ListingsFooter />
    </div>
  );
}
