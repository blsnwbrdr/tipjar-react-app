import React, { Component } from 'react';

const photos = ['banner1.jpg','banner2.jpg','banner3.jpg','banner4.jpg','banner5.jpg'];
const random = Math.floor(Math.random() * photos.length);
const splashBackground = {backgroundImage: 'url(img/' + photos[random] + ')'}

class Splash extends Component {

  render() {
    return (
      <div className='splash' style={splashBackground}>
        <div className='overlay'>
          <div className='header'>
            <h1>TIP JAR</h1>
            <p>A globetrotting guide to gratuity</p>
            <button onClick={this.props.displayListings}>Choose a Location</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;
