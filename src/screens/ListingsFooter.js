import React from 'react';

export default function ListingsFooter() {
  return (
    <footer className='footer'>
      <div className='app-store'>
        <a
          href='https://itunes.apple.com/us/app/tip-jar-guide-to-gratuity/id1321633520?ls=1&amp;mt=8'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={process.env.PUBLIC_URL + '/img/appStore.svg'}
            alt='apple app store icon'
          />
        </a>
      </div>
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
