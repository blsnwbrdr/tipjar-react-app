import React, { Component } from 'react';

class ListingsFooter extends Component {
  render() {
    return (
      <footer className='footer'>
        <p>
          <a href='mailto:brandon.t.lew@gmail.com'>brandon.t.lew@gmail.com</a>
        </p>
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <a
            href='http://brandonlew.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            brandon lew
          </a>
        </p>
      </footer>
    );
  }
}

export default ListingsFooter;
