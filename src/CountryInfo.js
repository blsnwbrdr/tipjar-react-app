import React, { Component } from 'react';

class CountryInfo extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     countryTipData: this.props.countryTipData,
  //     currencyData: this.props.currencyData
  //   }
  // }

  render() {
    return (
      <div className="body">
        <div className="button">
          <button onClick={ () => this.props.displayCountryList() }>Choose a Location</button>
        </div>
        <div className="country">
          <h2>{this.props.countryTipData.country}</h2>
          <h3>Dining:</h3>
          <p>{this.props.countryTipData.dining}</p>
          <h3>Transportation:</h3>
          <p>{this.props.countryTipData.transportation}</p>
          <h3>Accomodation:</h3>
          <p>{this.props.countryTipData.accommodation}</p>
          <h3>Currency*:</h3>
          <p>1 USD = {this.props.currencyData} {this.props.countryTipData.currency}</p>
          <h3>Thank you:</h3>
          <p>{this.props.countryTipData.thankyou}</p>
          <h3>Goodbye:</h3>
          <p>{this.props.countryTipData.goodbye}</p>
          <p>*Currency data is not live. Exchange rates are historical and periodically updated.</p>
        </div>
      </div>
    )
  }
}

export default CountryInfo;
