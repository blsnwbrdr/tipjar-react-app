import React, { Component } from 'react';
import './App.css';

const photos = ["banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg","banner5.jpg"];
const random = Math.floor(Math.random() * photos.length);
const bannerStyle = {backgroundImage: 'url(img/' + photos[random] + ')'}

class App extends Component {
  constructor(props) {
    super(props);
    this._locationList = this._locationList.bind(this);
    this.state = {
      display: "splash"
    };
  }
  _locationList = () => {
    this.setState({
      display: "list"
    });
  }

  render() {
    const display = this.state.display

    switch (display) {
      case "splash":
    // if (display === "splash") {
        return (
          <div className="banner" style={bannerStyle}>
            <div className="banner-overlay">
              <div className="banner-text">
                <h1>TIP JAR</h1>
                <p>A globetrotting guide to gratuity</p>
                <button onClick={this._locationList}>Choose a Location</button>
              </div>
            </div>
          </div>
        );
        // break;
      case "list":
    // } else if (display === "list") {
        return (
          <h1>hello</h1>
        );
        // break;
      default:
        return (
          <h1>default</h1>
        );
    }
  }
}

export default App;
