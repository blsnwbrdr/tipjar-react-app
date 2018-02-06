import React, { Component } from 'react';
import './App.css';



class App extends Component {

  render() {
    const photos = ["banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg","banner5.jpg"];
    const random = Math.floor(Math.random() * photos.length);
    const bannerStyle = {backgroundImage: 'url(' + photos[random] + ')'}
    return (
      <div className="banner" style={bannerStyle}>
        <div className="overlay"></div>
      </div>
    );
  }
}

export default App;
