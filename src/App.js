import React, { Component } from 'react';
import './App.css';
import Splash from './Splash';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.displayList = this.displayList.bind(this);
    this.state = {
      display: "splash"
    };
  }
  displayList = () => {
    this.setState({
      display: "list"
    });
  }

  render() {
    const display = this.state.display

    switch (display) {
      case "splash":
        return (
          <Splash displayList={this.displayList} />
        );
      case "list":
        return (
          <List />
        );
      default:
        return (
          <Splash displayList={this.displayList} />
        );
    }
  }
}

export default App;
