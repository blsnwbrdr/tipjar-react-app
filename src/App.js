import React, { Component } from 'react';
import './App.css';
import Splash from './Splash';
import Listings from './Listings';

class App extends Component {
  constructor(props) {
    super(props);
    this.displayListings = this.displayListings.bind(this);
    this.state = {
      display: 'Splash'
    };
  }

  componentDidMount() {
    fetch('https://brandonscode.herokuapp.com/currency-data')
      console.log('Connected to currency database');
  }

  displayListings() {
    this.setState({
      display: 'Listings'
    });
  }

  render() {
    const display = this.state.display;

    switch (display) {
      case 'Splash':
        return (
          <Splash displayListings={this.displayListings} />
        );
      case 'Listings':
        return (
          <Listings />
        );
      default:
        return (
          <Splash displayListings={this.displayListings} />
        );
    }
  }
}

export default App;
