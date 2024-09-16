import React from 'react';

export default function CountryInfo(props) {
  return (
    <div className='body fadeIn'>
      <div className='button'>
        <button onClick={() => props.displayCountryList()}>
          Choose a Location
        </button>
      </div>
      <div className='country'>
        <h2>{props.countryTipData.country}</h2>
        <div className='fa fa-cutlery'></div>
        <h3 className='line-100'>Dining*</h3>
        <p>{props.countryTipData.dining}</p>
        <div className='fa fa-taxi'></div>
        <h3 className='line-200'>Transportation</h3>
        <p>{props.countryTipData.transportation}</p>
        <div className='fa fa-building'></div>
        <h3 className='line-200'>Accommodation</h3>
        <p>{props.countryTipData.accommodation}</p>
        <div className='fa fa-money'></div>
        <h3 className='line-140'>Currency**</h3>
        <p>
          1 USD = {props.countryCurrencyData} {props.countryTipData.currency}
        </p>
        <div className='fa fa-language'></div>
        <h3 className='line-140'>Thank you</h3>
        <p>{props.countryTipData.thankyou}</p>
        <h3 className='line-125'>Goodbye</h3>
        <p>{props.countryTipData.goodbye}</p>
        <p className='disclaimer'>
          *If paying with a credit card, it is highly recommended to have cash
          available for leaving tips. Many countries do not have a spot for
          gratuity on their credit card slips.
        </p>
        <p className='disclaimer'>
          **Currency data is not live. Exchange rates are updated periodically.
        </p>
      </div>
    </div>
  );
}
