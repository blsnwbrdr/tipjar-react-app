import React, { Component } from 'react';
import CountryList from './CountryList';
import CountryInfo from './CountryInfo';

// JSON DATA
import countryTipData from './data/countryTipData';
import currencyData from './data/currencyData';

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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log(country);
    for ( var x = 0; x < countryTipData.length; x++) {
      if (country === countryTipData[x].country) {
        for ( var i = 0; i < currencyData.length; i++) {
          if (countryTipData[x].currency === currencyData[i].currency) {
            this.setState({
             display: 'CountryInfo',
             countryTipData: countryTipData[x],
             currencyData: Math.round(currencyData[i].conversion * 100) / 100,
            })
          }
        }
      }
    }
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
            countryTipData={this.state.countryTipData}
            currencyData={this.state.currencyData}
            />
        )
      default:
        return (
          <CountryList displayCountryInfo={this.displayCountryInfo} />
        )
    }
  }
}

export default ListingsBody;
