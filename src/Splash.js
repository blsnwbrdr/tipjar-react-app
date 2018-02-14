import React, { Component } from 'react';

const photos = ["banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg","banner5.jpg"];
const random = Math.floor(Math.random() * photos.length);
const bannerStyle = {backgroundImage: 'url(img/' + photos[random] + ')'}

class Splash extends Component {

  render() {
    return (
      <div className="banner" style={bannerStyle}>
        <div className="banner-overlay">
          <div className="banner-text">
            <h1>TIP JAR</h1>
            <p>A globetrotting guide to gratuity</p>
            <button onClick={this.props.displayList}>Choose a Location</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;
