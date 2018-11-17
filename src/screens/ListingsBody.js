import React, { Component } from 'react';
import CountryList from './CountryList';
import CountryInfo from './CountryInfo';

class ListingsBody extends Component {
  constructor(props) {
    super(props);
    this.displayCountryList = this.displayCountryList.bind(this);
    this.displayCountryInfo = this.displayCountryInfo.bind(this);
    this.state = {
      display: 'CountryList',
      currencyData: []
    };
  }

  componentDidMount() {
    fetch('https://brandonscode.herokuapp.com/tipjar/currency-data')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            currencyData: result
          });
        }
      )
  }

  displayCountryList() {
    this.setState({
      display: 'CountryList'
    });
  }

  displayCountryInfo(country) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(`https://brandonscode.herokuapp.com/tipjar/search/country/${country}`)
      .then(res => res.json())
      .then(
        (result) => {
          for ( var i = 0; i < this.state.currencyData.length; i++) {
            if (result.currency === this.state.currencyData[i].currency) {
              this.setState({
               display: 'CountryInfo',
               countryTipData: result,
               countryCurrencyData: Math.round(this.state.currencyData[i].conversion * 100) / 100,
              })
            }
          }
        }
      )
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
            countryCurrencyData={this.state.countryCurrencyData}
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
