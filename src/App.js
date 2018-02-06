import React, { Component } from 'react';
import './App.css';

const photos = ["banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg","banner5.jpg"];
const random = Math.floor(Math.random() * photos.length);
const bannerStyle = {backgroundImage: 'url(img/' + photos[random] + ')'}

class App extends Component {

  render() {

    return (
      <div className="banner" style={bannerStyle}>
        <div className="overlay"></div>
      </div>
    );
  }
}

export default App;
