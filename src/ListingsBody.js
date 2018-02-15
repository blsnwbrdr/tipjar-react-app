import React, { Component } from 'react';
import CountryList from './CountryList';
import CountryInfo from './CountryInfo';

class ListingsBody extends Component {
  constructor(props) {
    super(props);
    this.displayCountryList = this.displayCountryList.bind(this);
    this.state = {
      display: 'CountryInfo'
    };
  }

  // displayCountryList = (e) => {
  //   this.setState({
  //     display: 'CountryList'
  //   });
  //   console.log(e);
  // }
  displayCountryList(e) {
    this.setState({
      display: 'CountryList'
    });
    console.log(e);
  }

  render() {
    const display = this.state.display;

    switch(display) {
      case 'CountryList':
        return (
          <CountryList />
        )
      case 'CountryInfo':
        return (
          <CountryInfo displayCountryList={this.displayCountryList} />
        )
      default:
        return (
          <CountryList />
        )
    }
  }
}

export default ListingsBody;
