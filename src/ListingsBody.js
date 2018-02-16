import React, { Component } from 'react';
import CountryList from './CountryList';
import CountryInfo from './CountryInfo';

class ListingsBody extends Component {
  constructor(props) {
    super(props);
    this.displayCountryList = this.displayCountryList.bind(this);
    this.displayCountryInfo = this.displayCountryInfo.bind(this);
    this.state = {
      display: 'CountryList'
    };
  }

  displayCountryList() {
    this.setState({
      display: 'CountryList'
    });
  }

  displayCountryInfo(country) {
    this.setState({
      display: 'CountryInfo',
      chosenCountry: country
    });
    console.log(country);
  }

  render() {
    const display = this.state.display;

    switch(display) {
      case 'CountryList':
        return (
          <CountryList displayCountryInfo={this.displayCountryInfo} />
        )
      case 'CountryInfo':
        return (
          <CountryInfo
            displayCountryList={this.displayCountryList}
            chosenCountry={this.state.chosenCountry}
            />
        )
      default:
        return (
          <CountryList />
        )
    }
  }
}

export default ListingsBody;
