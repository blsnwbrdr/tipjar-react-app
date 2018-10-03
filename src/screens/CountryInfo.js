import React, { Component } from 'react';

class CountryInfo extends Component {

  render() {
    return (
      <div className='body fadeIn'>
        <div className='button'>
          <button onClick={ () => this.props.displayCountryList() }>Choose a Location</button>
        </div>
        <div className='country'>
          <h2>{this.props.countryTipData.country}</h2>
          <div className='fa fa-cutlery'></div>
          <h3 className='line-100'>Dining*:</h3>
          <p>{this.props.countryTipData.dining}</p>
          <div className='fa fa-taxi'></div>
          <h3 className='line-200'>Transportation:</h3>
          <p>{this.props.countryTipData.transportation}</p>
          <div className='fa fa-building'></div>
          <h3 className='line-200'>Accommodation:</h3>
          <p>{this.props.countryTipData.accommodation}</p>
          <div className='fa fa-money'></div>
          <h3 className='line-140'>Currency**:</h3>
          <p>1 USD = {this.props.countryCurrencyData} {this.props.countryTipData.currency}</p>
          <div className='fa fa-language'></div>
          <h3 className='line-140'>Thank you:</h3>
          <p>{this.props.countryTipData.thankyou}</p>
          <h3 className='line-125'>Goodbye:</h3>
          <p>{this.props.countryTipData.goodbye}</p>
          <p className='disclaimer'>*If paying with a credit card, it is highly recommended to have cash available for leaving tips. Many countries do not have a spot for gratuity on their credit card slips.</p>
          <p className='disclaimer'>**Currency data is not live. Exchange rates are updated periodically.</p>
        </div>
      </div>
    )
  }
}

export default CountryInfo;
