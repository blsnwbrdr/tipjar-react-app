import React, { Component } from 'react';

class CountryInfo extends Component {

  render() {
    return (
      <div className="body">
        <div className="button">
          <button onClick={ () => this.props.displayCountryList() }>Choose a Location</button>
        </div>
        <div>
          <p>{this.props.chosenCountry}</p>
        </div>
      </div>
    )
  }
}

export default CountryInfo;
