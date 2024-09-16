import React, { useState, useEffect } from 'react';

export default function ListingsHeader() {
  const [shadow, setShadow] = useState('');

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', scrolling);
  });

  // Scrolling function to add 'shadow' class
  const scrolling = () => {
    if (window.scrollY === 0) {
      setShadow('');
    } else if (window.scrollY > 0) {
      setShadow('shadow');
    }
  };

  return (
    <div className={`header fadeIn ${shadow}`}>
      <nav className='nav'></nav>
      <h1>TIP JAR</h1>
      <img
        src={process.env.PUBLIC_URL + '/img/tipjarIcon.png'}
        alt='globe with luggage'
      />
      <p>A globetrotting guide to gratuity</p>
    </div>
  );
}
