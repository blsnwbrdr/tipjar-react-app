import React, { useState } from 'react';

// COMPONENTS
import Splash from './screens/Splash';
import Listings from './screens/Listings';

// STYLES
import './styles/app.min.css';

export default function App() {
  const [display, setDisplay] = useState('Splash');

  const displayListings = () => {
    setDisplay('Listings');
  };

  switch (display) {
    case 'Splash':
      return <Splash displayListings={displayListings} />;
    case 'Listings':
      return <Listings />;
    default:
      return <Splash displayListings={displayListings} />;
  }
}
